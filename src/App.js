import React from 'react';
import ListOutput from './components/listComponents/listOutput/listOutput';

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
    tasksid: getId(),
    title: 'first task',
    done: false,
    due_date: new Date(),
    listId: 1
  },
  {
    tasksid: getId(),
    title: 'Second task',
    done: false,
    due_date: new Date(),
    listId: 1
  },
  {
    tasksid: getId(),
    title: 'first task from list two',
    done: false,
    due_date: new Date(),
    listId: 2
  },
  {
    tasksid: getId(),
    title: 'second task from list two',
    done: false,
    due_date: new Date(),
    listId: 2
  },
  {
    tasksid: getId(),
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
    </div >
  );
}

export default App;
