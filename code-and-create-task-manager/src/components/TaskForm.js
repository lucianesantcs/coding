import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(TaskListContext);
  const [title, setTitle] = useState('');

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
   if(editItem) {
    setTitle(editItem.title);
   } else {
    setTitle('');
   }
  }, [ editItem ]);

  return (
    <form onSubmit={ handleSubmit } className='form'>
      <input onChange={ handleChange } value={ title } type='text' placeholder='Add new task' required className='task-input' />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          {editItem ? 'Edit Task' : 'Add Task'}
        </button>
        <button onClick={ clearList } className='btn clear-btn'>Clear</button>
      </div>
    </form>
  );
};

export default TaskForm;
