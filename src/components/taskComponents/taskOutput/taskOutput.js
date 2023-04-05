import React from "react";
import Task from "../task/task";
import './index.css'
function TaskOutput({ tasks, id, setUpdate }) {
    return (
        <div className="tasks_form">
            {
                tasks.map(task => (
                    task.listId === id ? <Task task={task} setUpdate={setUpdate} /> : ''
                ))
            }
        </div>
    )
}
export default TaskOutput