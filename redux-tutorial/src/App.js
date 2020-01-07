import React from 'react';

import './App.css';
import ToDoAdder from './Components/ToDoAdder';
import ToDoLister from './Components/ToDoLister';
import VisibilityFilterer from './Components/VisibilityFilterer';

function App() {
  return (
   <main className="todo-app">
     <h1>To Do List</h1>
     <ToDoAdder />
     <ToDoLister />
     <VisibilityFilterer />
   </main>
  );
}

export default App;
