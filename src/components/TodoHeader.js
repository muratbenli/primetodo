import React, {useState, useContext} from "react";
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {SelectButton} from 'primereact/selectbutton';
import TodoItem from "./TodoItem";
import {Button} from "primereact/button";
import PrimeTodoContext from "../context/PrimeTodoContext";
import {v4 as uuidv4} from "uuid";

let filtered = "test"
const TodoHeader = () => {
    const { todos, setTodos, activeFilter, setActiveFilter } = useContext(PrimeTodoContext);

    const [state,setState] = useState("");
    const todoLeft = todos.filter((todo) => !todo.completed);

    const buttonOptions = [
        {label: `All (${todos.length})`, value: 'All'},
        {label: `Active (${todoLeft.length})`, value: 'Active'},
        {label: `Done (${todos.length-todoLeft.length})`, value: 'Done'}
    ];



    const onDestroy = (id) =>
        setTodos(todos.filter((todo) => todo.id !== id && todo));

    const onChange = (id) => {
        const updatedData = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );

        setTodos(updatedData);
    };



    const onSubmit = () => {
        const data = {
            text:state,
            completed: false,
            id: uuidv4(),
        };
        if(state !== "")
        {
            setTodos([data, ...todos]);
            setState("");
        }
    };

    filtered = todos;

    if (activeFilter !== "All") {
        filtered = todos.filter((todo) =>
            activeFilter === "Active"
                ? todo.completed === false && todo
                : todo.completed === true && todo
        );
    }
    return(
        <>
                <div className="p-col-9">
                    <Card title="To Do" className="cardContainer">
                        <div style={{display:"flex", justifyContent:"center", marginBottom:"15px"}}>
                            <div className="p-col-2 textFont" style={{marginTop:"4px"}}>Add New Task</div>
                            <InputText  onKeyDown={(e) => e.key ==="Enter" && onSubmit()} className="p-col-4" placeholder="Add a new task to the list"
                                       value={state} onChange={(e) => setState( e.target.value)} />
                            <div className="p-col-1">
                                <Button onClick={() => onSubmit()} icon="pi pi-check" className="p-button-rounded btnSub" />
                            </div>
                        </div>
                        <SelectButton value={activeFilter} options={buttonOptions} onChange={(e) => setActiveFilter(e.value)} />
                    </Card>
                </div>
                <div className="p-col-9">
                    <Card title="List" className="cardContainer">
                        {filtered.map((todo,index) =>
                            <TodoItem todo={todo} key={index} onChange={onChange}  onDestroy={onDestroy} />
                        )}
                        {filtered.length === 0 ? <div> List is empty.</div> : ""}
                    </Card>
                </div>

        </>
    )
}

export default TodoHeader;