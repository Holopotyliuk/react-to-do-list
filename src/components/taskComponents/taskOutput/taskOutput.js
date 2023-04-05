import React from "react";
import Task from "../task/task";
function TaskOutput({ tasks }) {
    return (
        <div >
            {
                tasks.map(task => (
                    <Task task={task} />
                ))
            }
        </div>
    )
}
export default TaskOutput