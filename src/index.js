import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './keeper/App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
    {/* {<Testing /> } */}
  </React.StrictMode>
);



// const name = "Vignesh";
// const year = new Date();
// const yrs=year.getFullYear();
// console.log(yrs);
// root.render(
//   <div>
//     <p>Created by {name}</p>
//     <p>Copyright {yrs} </p>
//   </div>
// );





// root.render(
//   <div>
//       <h1>My Favourite Foods</h1>
//       <ul>
//           <li>Pongal</li>
//           <li>Poori</li>
//           <li>Parota</li>
//       </ul>
//   </div>,
// );




// var ReactDOM = require("react-dom");

// ReactDOM.render(<h1>Hello World</h1>,document.getElementById("root"));



// const fname = "Vignesh";
// const lname = "Manikandan";
// const number = 3;
// root.render(
//   <div>
//     <h1>Hello {fname} {lname}</h1>
//     <p>Your Lucky number is {number} </p>
//   </div>
// );