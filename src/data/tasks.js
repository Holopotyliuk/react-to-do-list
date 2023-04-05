const inc = (init = 0) => () => ++init;
const getId = inc()


let tasks = [
    {
        taskid: getId(),
        title: 'first task',
        done: false,
        due_date: new Date(),
        listId: 1
    },
    {
        taskid: getId(),
        title: 'Second task',
        done: true,
        due_date: new Date(),
        listId: 1
    },
    {
        taskid: getId(),
        title: 'first task from list two',
        done: false,
        due_date: new Date(),
        listId: 2
    },
    {
        taskid: getId(),
        title: 'second task from list two',
        done: false,
        due_date: new Date(),
        listId: 2
    },
    {
        taskid: getId(),
        title: 'first task from list three',
        done: false,
        due_date: new Date(),
        listId: 3
    },

];

export default tasks