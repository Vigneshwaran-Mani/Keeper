import React from 'react';
import './styles.css';
import { useDispatch } from 'react-redux';
import { noteActions } from '../store/note-slice';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props){
    
    const dispatch = useDispatch();
    const handleChange = () => {
        const id = props.id;
        dispatch(noteActions.removeNote(id));
    }

    return(
        <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleChange}>
            <DeleteIcon/>
        </button>
    </div> 
    );
}