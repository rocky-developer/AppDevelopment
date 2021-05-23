//import the libraries
import React from 'react';
import ReactDOM, { render } from 'react-dom';

const App = () =>{
    const btnText = "Click Me!";
    const style ={backgroundColor:'green',color:'white'};
    return (
    <div>
        <label htmlFor="name">Enter the name</label>
        <input id="name" type="text"/>
        <button style={style}>{btnText}</button>
    </div>
    );
}

ReactDOM.render(
    <App/>,
document.querySelector("#root")
);