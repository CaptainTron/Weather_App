import React from "react";
import Todolist from "./Todolist"
export default function Todoline({Text, toggle, handlefilter}){
    return (
        <div>
            {Text.map(todo => {
                return (
                    <Todolist todo={todo} toggle={toggle}/>
                )
            })}
            <button className="clear" onClick={handlefilter}>Clear Complete</button>
        </div>
    )
}