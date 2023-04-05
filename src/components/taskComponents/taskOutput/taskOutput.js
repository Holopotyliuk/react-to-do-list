import React from "react";
import Task from "../task/task";
import './index.css'
function TaskOutput({ tasks }) {
    return (
        <div className="tasks_form">
            {
                tasks.map(task => (
                    <Task task={task} />
                ))
            }
        </div>
    )
}
export default TaskOutput