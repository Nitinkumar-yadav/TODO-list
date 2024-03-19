import React from "react";
import './App.css';

const TodoList = (props) =>{
    
    return(
        <div className="Container">
        {props.id+1}        
        {props.text} 
        <button 
            className='delete'
            onClick={()=>{
            props.onSelect(props.id); 
        }}>Delete</button>
        </div>
    )
};
export default TodoList; 