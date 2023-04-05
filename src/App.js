import React from 'react';
import ListOutput from './components/listComponents/listOutput/listOutput';

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
  },
  {
    listId: getId(),
    title: 'Third list'
  }];

function App() {
  return (
    < div className="App" >
      <ListOutput lists={lists} />
    </div >
  );
}

export default App;
