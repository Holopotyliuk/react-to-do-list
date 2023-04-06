import React, { useState } from "react";
import './index.css'
function CreateTask() {
    const [values, setValue] = useState({ input1: 'title', input2: 'date' })
    const hundleInputChange = (event) => {
        const { name, value } = event.target;
        setValue((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    }
    return (
        <form className="formCreatetask">
            <input type="text" name="input1" value={values.input1} onChange={event => { hundleInputChange(event) }} />
            <input type="text" name="input2" value={values.input2} onChange={event => { hundleInputChange(event) }} />
        </form>
    )
}

export default CreateTask