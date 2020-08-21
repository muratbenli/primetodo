import React from 'react';
import primeLogo from '../assets/prime.png';
import TodoHeader from "./TodoHeader";

const TodoForm = () => {

    return(
        <>
            <img src={primeLogo} alt="primereact" className="primelogo"/>
            <div style={{marginBottom:"10px"}}>Prime To Do</div>
            <TodoHeader />
        </>
    )
}

export default TodoForm;