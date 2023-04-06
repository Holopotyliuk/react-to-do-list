import tasks from '../../data/tasks.js'
class Task {
    remove(id, setUpdate, update) {
        const indexTask = tasks.findIndex(task => task.taskid === id);
        tasks.splice(indexTask, 1)
        setUpdate(!update)
    }
    updateCheck(id, checked, setChecked) {
        const indexTask = tasks.findIndex(task => task.taskid === id);
        tasks[indexTask].done = !checked;
        setChecked(!checked)

    }
    create(task, setUpdate, update) {
        tasks.push(task)
        setUpdate(!update)
    }
}

export default new Task();