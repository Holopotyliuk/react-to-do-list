import React, { useState } from "react";
import Task from "../task/task";
import './index.css'
function TaskOutput({ tasks, id }) {
    const [update, setUpdate] = useState(true);
    return (
        <div className="tasks_form">
            {
                tasks.map(task => (
                    task.listId === id ? <Task task={task} setUpdate={setUpdate} update={update} /> : ''
                ))
            }
        </div>
    )
}
export default TaskOutput