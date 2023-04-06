import React, { useState } from "react";
import controller from '../../../controllers/taskController/taskController'
import './index.css'
function CreateTask({ id, setUpdate, update }) {
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
            <button type="button" className="createButton" onClick={() => { controller.create(createObject(values, id), setUpdate, update) }}>OK</button>
        </form>
    )
}
function createObject(values, listId) {
    let task = {
        taskid: 100,
        title: values.input1,
        done: false,
        due_date: new Date(values.input2),
        listId: listId
    }
    return task
}

export default CreateTask