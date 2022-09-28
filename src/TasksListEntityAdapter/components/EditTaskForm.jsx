import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask } from '../slices/tasksSlise.js';
import { updateUIStateTasks } from '../slices/uiStateSlise.js';
import { updateEditForm, resetEditForm } from '../slices/editFormSlise.js';

const EditTaskForm = (props) => {
  const inputEl = useRef(null);
  useEffect(() => {
    inputEl.current.select();
  }, []);

  const editingTaskText = useSelector((state) => state.editForm[props.taskId]);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(updateTask({ id: props.taskId, changes: { text: editingTaskText } }));
    dispatch(updateUIStateTasks({ id: props.taskId, isEditing: false }));
    dispatch(resetEditForm({ id: props.taskId }));
  };

  const handleChange = (event) => {
    dispatch(updateEditForm({ id: props.taskId, newText: event.target.value }));
  };

  const handleCancel = (event) => {
    dispatch(updateUIStateTasks({ id: props.taskId, isEditing: false }));
    dispatch(resetEditForm({ id: props.taskId }));
  };

  return (
    <form action='' className='form-inline' onSubmit={handleSubmit}>
      <div className='form-group mx-sm-3'>
        <input ref={inputEl} type='text' required value={editingTaskText} onChange={handleChange}/>
      </div>
      <button type='submit' className='btn btn-primary btn-sm'>Edit</button>
      <button type='button' className='btn btn-primary btn-sm' onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default EditTaskForm;
