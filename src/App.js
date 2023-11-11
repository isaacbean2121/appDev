import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ToDo from './components/Todo';

function App() {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  return (
    <div className="App">
       <div>
    
    <ToDo tasks={tasks} />
    
  </div>
    </div>
  );
}

export default App;
