import { dataLists } from '../../App'
import { create } from '../../models/listModels'
class List {
    create(title, setUpdate, update) {
        create(title)
            .then((list) => {
                dataLists.push(list[0])
                setUpdate(!update)
            })
    }
}

const listInstance = new List();

export default listInstance;