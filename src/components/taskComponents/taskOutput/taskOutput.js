import React from "react";
import Task from "../task/task";
import './index.css'
function TaskOutput({ tasks, id }) {
    return (
        <div className="tasks_form">
            {
                tasks.map(task => (
                    task.listId === id ? <Task task={task} /> : ''
                ))
            }
        </div>
    )
}
export default TaskOutput