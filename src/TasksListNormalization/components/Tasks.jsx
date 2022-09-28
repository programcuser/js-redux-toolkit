import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask } from '../slices/tasksSlise.js';

const Tasks = (props) => {
  const tasks = useSelector((state) => state.tasks.entities);
  const tasksIdsList = useSelector((state) => state.tasks.ids);

  const dispatch = useDispatch();

  const handleRemove = (id) => (_event) => {
    dispatch(removeTask({ id }));
  };

  return (
    <div className='mt-3'>
      <ul className='list-group'>
        { tasksIdsList.map(id => (
          <li key={id} className='list-group-item d-flex'>
            <span className='mr-auto'>{tasks[id].text}</span>
            <button type='button' className='close' onClick={handleRemove(id)}>
              <span>&times;</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
