import tasks from '../../data/tasks.js'
class Task {
    remove(id, setUpdate, update) {
        const indexTask = tasks.findIndex(task => task.taskid === id);
        tasks.splice(indexTask, 1)
        setUpdate(!update)
    }
}

export default new Task();