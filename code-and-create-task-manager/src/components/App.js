import React from 'react';
import Header from './Header';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskListContextProvider from '../contexts/TaskListContext';
import './style.css';

const App = () => {
  return (
    <TaskListContextProvider>
      <div className='container'>
        <div className='app-wrapper'>
            <Header />
          <div className='main'>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
