import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../slices/tasksSlise.js';
import { updateTask, resetTask } from '../slices/newTaskSlise.js';
import _ from 'lodash';

const NewTaskForm = (props) => {
  const newTaskText = useSelector((state) => state.newTaskText);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(addTask({ task: { id: _.uniqueId(), text: newTaskText } }));
    dispatch(resetTask());
  };

  const handleChange = (event) => {
    dispatch(updateTask({ text: event.target.value }));
  };

  return (
    <form action='' className='form-inline' onSubmit={handleSubmit}>
      <div className='form-group mx-sm-3'>
        <input type='text' required value={newTaskText} onChange={handleChange}/>
      </div>
      <button type='submit' className='btn btn-primary btn-sm'>Add</button>
    </form>
  );
};

export default NewTaskForm;
