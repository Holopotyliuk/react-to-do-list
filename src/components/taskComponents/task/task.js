import React from "react";
import './index.css'
function Task({ task }) {
    let due_date = new Date(task.due_date);
    let optionsTaskDate = { year: 'numeric', month: 'long', day: '2-digit' };
    let date = Intl.DateTimeFormat('en-US', optionsTaskDate).format(due_date)
    return (
        <div className="task">
            <p>{task.taskid}</p>
            <h2>{task.title}</h2>
            <input type="checkbox" checked={task.done}></input>
            <h2>{date}</h2>
        </div>
    )
}
export default Task
