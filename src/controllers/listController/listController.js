import { dataLists, dataTasks } from '../../App'
import { create, remove } from '../../models/listModels'
class List {
    create(title, setUpdate, update) {
        create(title)
            .then((list) => {
                dataLists.push(list[0])
                setUpdate(!update)
            })
    }
    remove(id, setListId) {
        remove(id)
            .then(() => {
                const indexList = dataLists.findIndex(list => list.listid === id);
                dataLists.splice(indexList, 1)
                const indexTask = dataTasks.findIndex(task => task.listid === id);
                dataTasks.splice(indexTask, 1)
                setListId(dataLists[0].listid)

            })

    }
}

const listInstance = new List();

export default listInstance;