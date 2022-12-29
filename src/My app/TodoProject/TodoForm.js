import React from "react";
export default function Form({addtask}){
    const [FormInput, setForminput] = React.useState("");
    function handlesubmit(e){
        e.preventDefault();
        addtask(FormInput);
        setForminput("");
        document.getElementById('input').value="";
    }
    function textinput(e){
        setForminput(e.currentTarget.value)
    }

    return (
        <form onSubmit={handlesubmit}>
            <input id="input" type="text" onChange={textinput} placeholder="Enter Your task here..."></input>
            <button>+ Add</button>
        </form>
    )
}