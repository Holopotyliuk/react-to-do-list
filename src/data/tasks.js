const inc = (init = 0) => () => ++init;
const getId = inc()


let tasks = [
    {
        id: getId(),
        title: 'first task',
        done: false,
        due_date: new Date(),
        listId: 1
    },
    {
        id: getId(),
        title: 'Second task',
        done: true,
        due_date: new Date(),
        listId: 1
    },
    {
        id: getId(),
        title: 'first task from list two',
        done: false,
        due_date: new Date(),
        listId: 2
    },
    {
        id: getId(),
        title: 'second task from list two',
        done: false,
        due_date: new Date(),
        listId: 2
    },
    {
        id: getId(),
        title: 'first task from list three',
        done: false,
        due_date: new Date(),
        listId: 3
    },

];

export default tasks