import React from "react";
import {Checkbox} from 'primereact/checkbox';
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import './Todo.css';
import todoPhoto from '../assets/todo.png';
import donePhoto from '../assets/done.png';

const TodoItem = ({todo, onDestroy, onChange}) => {
    return(
        <Card className="todoItem" style={{boxShadow:"10px 10px"}}>
            <div style={{display:"flex"}}>

                    <div className="p-col-3 itemPadding">
                        <div style={{display:"flex", marginTop:"12px"}}>
                            <div className="p-col-4" style={{marginTop:"4px"}}>
                                <Checkbox onChange={() => onChange(todo.id)} checked={todo.completed} ></Checkbox>
                            </div>
                            <div className="p-col-6 itemPadding">
                                <img src={!todo.completed ? todoPhoto : donePhoto}
                                     alt="taskStatus" style={{width:"50px", height:"50px"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="p-col-8 itemPadding" style={{textAlign:"left"}}>

                        <div>{!todo.completed ?
                            <div style={{color:"green"}}>Active</div>
                            :
                            <div style={{color:"red"}}>Done</div>
                            }
                            </div>
                        <div style={{display:"flex" , justifyItems:"center"}}>
                            <h2 className="textFont">
                                {todo.text}
                            </h2>
                        </div>
                    </div>
                    <div className="p-col-1" style={{marginTop:"16px"}} >
                        <Button onClick={() => onDestroy(todo.id)} icon="pi pi-trash" className="p-button-danger p-button-rounded" />
                    </div>

            </div>
        </Card>
    )
}

export default TodoItem;