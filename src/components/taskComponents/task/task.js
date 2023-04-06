import React, { useState } from "react";
import './index.css'
import controller from "../../../controllers/taskController/taskController"
function Task({ task, setUpdate, update }) {
    let due_date = new Date(task.due_date);
    let optionsTaskDate = { year: 'numeric', month: 'long', day: '2-digit' };
    let date = Intl.DateTimeFormat('en-US', optionsTaskDate).format(due_date)
    const [checked, setChecked] = useState(task.done)
    return (
        <div className="task">
            <p>{task.taskid}</p>
            <h3>{task.title}</h3>
            <input type="checkbox" checked={checked} onChange={() => { controller.updateCheck(task.taskid, checked, setChecked) }}></input>
            <h3>{date}</h3>
            <button className="delete" onClick={() => (controller.remove(task.taskid, setUpdate, update))}>DELETE</button>
        </div>
    )
}

export default Task
