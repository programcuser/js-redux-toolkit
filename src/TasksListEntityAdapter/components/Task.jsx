import React from 'react';
import { useDispatch } from 'react-redux'; // useSelector,
// import { selectors } from '../slices/tasksSlise.js';
import { removeTask } from '../slices/tasksSlise.js';
import { removeUIStateTasks, updateUIStateTasks } from '../slices/uiStateSlise.js';
import { updateEditForm, removeEditFormTask } from '../slices/editFormSlise.js';

const Task = (props) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => (_event) => {
    dispatch(removeTask(id));
    dispatch(removeUIStateTasks({ id }));
    dispatch(removeEditFormTask({ id }));
  };

  const handleEdit = (id) => (_event) => {
    dispatch(updateUIStateTasks({ id, isEditing: true }));
    dispatch(updateEditForm({ id, newText: props.taskText }));
  };

  return (
    <>
      <span className='mr-auto'>{props.taskText}</span>
      <button type='button' className='edit' onClick={handleEdit(props.taskId)}>
        Edit
      </button>
      <button type='button' className='close' onClick={handleRemove(props.taskId)}>
        <span>&times;</span>
      </button>
    </>
  );
};

export default Task;
