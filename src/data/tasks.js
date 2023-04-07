import axios from "axios";
async function getTask() {
    const tasks = await axios.get(`http://localhost:8000/tasks`)
    return tasks.data
}
export default getTask