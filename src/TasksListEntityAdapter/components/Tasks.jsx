import React from 'react';
import { useSelector } from 'react-redux'; // , useDispatch
import { selectors } from '../slices/tasksSlise.js';
import Task from './Task.jsx';
import EditTaskForm from './EditTaskForm.jsx';

const Tasks = (props) => {
  // const tasks = useSelector((state) => state.tasks.entities);
  // const tasksIdsList = useSelector((state) => state.tasks.ids);
  const tasks = useSelector(selectors.selectAll);

  const uiStateTasks = useSelector(state => state.uiState.tasks);

  return (
    <div className='mt-3'>
      <ul className='list-group'>
        { tasks.map(task => (
          <li key={task.id} className='list-group-item d-flex'>
            { uiStateTasks[task.id].isEditing ? <EditTaskForm taskText={task.text} taskId={task.id} /> : <Task taskText={task.text} taskId={task.id} /> }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
