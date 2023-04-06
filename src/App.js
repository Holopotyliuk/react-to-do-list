import React, { useState } from 'react';
import ListOutput from './components/listComponents/listOutput/listOutput';
import TaskOutput from './components/taskComponents/taskOutput/taskOutput';
import './index.css'
import lists from './data/lists'
import tasks from './data/tasks'

function App() {
  const [listId, setListId] = useState(lists[0].listId)
  return (
    < div className="App" >
      <ListOutput lists={lists} tasks={tasks} setListId={setListId} />
      <TaskOutput tasks={tasks} id={listId} />
    </div >
  );
}


export default App;
