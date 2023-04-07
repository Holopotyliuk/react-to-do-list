import axios from "axios";
async function getList() {
    const lists = await axios.get(`http://localhost:8000/lists`)
    return lists.data
}


export { getList } 