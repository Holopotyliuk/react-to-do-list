import axios from "axios";
async function getTask() {
    const tasks = await axios.get(`http://localhost:8000/tasks`)
    return tasks.data
}
async function update(id, checked) {
    const tasks = await axios.patch(`http://localhost:8000/tasks`, { id: id, done: checked })
    return tasks.data
}

export { getTask, update } 