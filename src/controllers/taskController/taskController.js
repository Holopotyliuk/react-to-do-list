import { dataTasks } from '../../App'
import { update } from '../../models/taskModels.js'
class Task {
    remove(id, setUpdate, update) {
        const indexTask = dataTasks.findIndex(task => task.id === id);
        dataTasks.splice(indexTask, 1)
        setUpdate(!update)
    }
    updateCheck(id, checked, setChecked) {
        update(id, !checked)
            .then(() => {
                setChecked(!checked)
                const indexTask = dataTasks.findIndex(task => task.id === id);
                dataTasks[indexTask].done = !checked;
            })

    }
    create(task, setUpdate, update) {
        dataTasks.push(task)
        setUpdate(!update)
    }
}

const taskInstance = new Task();

export default taskInstance;