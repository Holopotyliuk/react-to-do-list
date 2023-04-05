import React from 'react';
import List from './components/listComponents/list/list';

const inc = (init = 0) => () => ++init;
const getId = inc()
let lists = [
  {
    listId: getId(),
    title: 'First list'
  },
  {
    listId: getId(),
    title: 'Second list'
  }];

function App() {
  return (
    < div className="App" >
      {
        lists.map(list => (
          <List list={list} />
        ))
      }
    </div >
  );
}

export default App;
