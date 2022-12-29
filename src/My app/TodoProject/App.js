import React from "react";
import Todoline from "./Todoline"
import Tododata from "./Tododata";
import Form from "./TodoForm";
export default function Todo(){
    const [Text, setText] = React.useState([{}]);

    let date = new Date().toUTCString();

    function toggle(id){
        let mapped = Text.map(task => {
            return task.id == id ? { ...task, complete: !task.complete} : { ...task}; 
        });
        setText(mapped);
    }
    function handlefilter(){
        let filtered = Text.filter(task => {
            return !task.complete
        });
        setText(filtered);
    }
    function addtask(userinput){
        let copy = [...Text];
        copy = [...copy, {id:Text.length + 1, task: userinput, time: date, complete: false}]
        setText(copy);
    }

    return (
        <div>
            <header><h1>Todo App 🎯</h1></header>
            <div className="DisplayTodoList">
                <h1>Task to Accomplish 👇</h1>
                <Todoline Text={Text} toggle={toggle} handlefilter={handlefilter}/>
            </div>
            <Form addtask={addtask}/>
        </div>
    )
}