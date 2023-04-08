import React, { useState } from "react";
import Task from "../task/task";
import CreateTask from "../createTask/createTask";
import './index.css'
function TaskOutput({ tasks, id }) {
    const [update, setUpdate] = useState(true);
    const [showform, setShowForm] = useState(false);
    return (
        <div className="tasks_form">
            <button className="buttonCreate" onClick={() => { setShowForm(!showform) }}>CREATE TASK</button>
            {showform ? <CreateTask id={id} setUpdate={setUpdate} update={update} setShowForm={setShowForm} showform={setShowForm} /> : ''}
            {
                tasks.map(task => (
                    task.listid === id ? <Task task={task} setUpdate={setUpdate} update={update} /> : ''
                ))
            }
        </div>
    )
}
export default TaskOutput