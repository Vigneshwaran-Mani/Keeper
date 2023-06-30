import React,{useState} from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import {useDispatch,useSelector} from 'react-redux';
import { noteActions } from '../store/note-slice';
import { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';


export default function App(){

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.note.items);
  //console.log(cartItem);
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");

  const fetchData = async () =>{
    const res = await fetch("https://keeper-a9656-default-rtdb.firebaseio.com/noteItems.json");
    const data = await res.json();
    return data;
  }

  useEffect(() =>{
    const getData = async() =>{
      const keepData = await fetchData();
      if(keepData ===null){
        //** return nothing **
      }else{
        dispatch(noteActions.replaceData({keepData}));
      }
    }
    getData();
  },[dispatch]);

  useEffect(() =>{

    const sendRequest = async () =>{
      const res = await fetch("https://keeper-a9656-default-rtdb.firebaseio.com/noteItems.json",{
        method: "PUT",
        body: JSON.stringify(cartItem),
      });
      //console.log(JSON.stringify(cartItem));
      const data = await res.json();
      return data;
    }
    sendRequest();
  },[cartItem]);
  

  function HandleTitleChange(event) {
    setTitleValue(event.target.value);
  }

  function HandleContentChange(event) {
    setContentValue(event.target.value);
  }

  function submit(e) {
    try{
      dispatch(noteActions.addNote({
        titleValue,
        contentValue,
      }));
      e.preventDefault();
      setContentValue("");
      setTitleValue("");
    }catch(err){
      console.log(err);
    }    
  }
	 
    return(
        <div>
          <Header></Header>
        <div>
        <form className="create-note"> 
				  <input onChange={HandleTitleChange} name="title" placeholder="Title" value={titleValue}/>
				  <textarea onChange={HandleContentChange} name="content" placeholder="Take a note..." value={contentValue} rows="3" />
				  <button onClick={submit}><AddIcon/></button>
        </form>
        </div>
          {cartItem.map((record,id) => {return <Note key={id} id={id} title={record.title} content={record.content} />})}
          <Footer></Footer>
        </div>
  );
}
