import tasks from '../../data/tasks.js'
class Task {
    remove(id, setUpdate) {
        const indexTask = tasks.findIndex(task => task.taskid === id);
        tasks.splice(indexTask, 1)
        setUpdate(indexTask)
    }
}

export default new Task();