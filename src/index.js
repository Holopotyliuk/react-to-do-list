import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

