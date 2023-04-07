import React, { useState, useEffect } from 'react';
import ListOutput from './components/listComponents/listOutput/listOutput';
import TaskOutput from './components/taskComponents/taskOutput/taskOutput';
import './index.css'
import lists from './data/lists'
import { getTask } from './models/taskModels'
let dataTasks;
function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const tasksData = await getTask();
      setTasks(tasksData);
    };
    fetchData();
  }, []);
  dataTasks = tasks
  const [listId, setListId] = useState(lists[0].listId)
  return (
    < div className="App" >
      <ListOutput lists={lists} setListId={setListId} />
      <TaskOutput tasks={tasks} id={listId} />
    </div >
  );
}


export { App, dataTasks };
