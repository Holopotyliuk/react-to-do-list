import axios from "axios";
async function getList() {
    const lists = await axios.get(`http://localhost:8000/lists`)
    return lists.data
}
async function create(title) {
    const list = await axios.post(`http://localhost:8000/lists`, { list_title: title })
    return list.data
}

export { getList, create } 