import React, { useState, useEffect } from 'react';
import ListOutput from './components/listComponents/listOutput/listOutput';
import TaskOutput from './components/taskComponents/taskOutput/taskOutput';
import './index.css'
import { getTask } from './models/taskModels'
import { getList } from './models/listModels'
let dataTasks;
let dataLists
function App() {
  const [tasks, setTasks] = useState([]);
  const [lists, setLists] = useState([{ listid: 0, list_title: '' }]);
  useEffect(() => {
    const fetchData = async () => {
      const listsData = await getList();
      const tasksData = await getTask();
      setLists(listsData);
      setTasks(tasksData);

    };
    fetchData();
  }, []);
  dataLists = lists
  dataTasks = tasks
  const [listid, setListId] = useState(1)
  return (
    < div className="App" >
      <ListOutput lists={lists} setListId={setListId} />
      <TaskOutput tasks={tasks} id={listid} />
    </div >
  );
}

export { App, dataTasks, dataLists };
