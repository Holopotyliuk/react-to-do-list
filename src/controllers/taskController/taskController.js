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
    create(values, listId, setUpdate, update) {
        let obj = {
            taskid: 100,
            title: values.input1,
            done: false,
            due_date: new Date(values.input2),
            listId: listId
        }
        tasks.push(obj)
        setUpdate(!update)
    }
}

export default new Task();