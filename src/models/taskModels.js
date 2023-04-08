import axios from "axios";
async function getTask() {
    const tasks = await axios.get(`http://localhost:8000/tasks`)
    return tasks.data
}
async function update(id, checked) {
    const tasks = await axios.patch(`http://localhost:8000/tasks`, { id: id, done: checked })
    return tasks.data
}
async function create(task) {
    const { title, done, due_date, listid } = task
    const tasks = await axios.post(`http://localhost:8000/tasks`, { title: title, done: done, due_date: due_date, listId: listid })
    return tasks.data
}
async function remove(id) {
    const tasks = await axios.delete(`http://localhost:8000/tasks/${id}`, {
        params: {
            id: id
        }
    });
    return tasks.data
}

export { getTask, update, create, remove } 