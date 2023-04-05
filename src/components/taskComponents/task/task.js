import React from "react";
import './index.css'
import controller from "../../../controllers/taskController/taskController"
function Task({ task, setUpdate }) {
    let due_date = new Date(task.due_date);
    let optionsTaskDate = { year: 'numeric', month: 'long', day: '2-digit' };
    let date = Intl.DateTimeFormat('en-US', optionsTaskDate).format(due_date)
    return (
        <div className="task">
            <p>{task.taskid}</p>
            <h3>{task.title}</h3>
            <input type="checkbox" checked={task.done} onChange={() => { }}></input>
            <h3>{date}</h3>
            <button className="delete" onClick={() => (controller.remove(task.taskid, setUpdate))}>DELETE</button>
        </div>
    )
}
export default Task
