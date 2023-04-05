import React from 'react';
import ListOutput from './components/listComponents/listOutput/listOutput';
import TaskOutput from './components/taskComponents/taskOutput/taskOutput';
import './index.css'
const inc = (init = 0) => () => ++init;
const getId = inc()
let lists = [
  {
    listId: 1,
    title: 'First list'
  },
  {
    listId: 2,
    title: 'Second list'
  },
  {
    listId: 3,
    title: 'Third list'
  }];

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

function App() {
  return (
    < div className="App" >
      <ListOutput lists={lists} />
      <TaskOutput tasks={tasks} />
    </div >
  );
}

export default App;
