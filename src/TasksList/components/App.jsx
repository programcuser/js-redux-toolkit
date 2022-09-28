import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeTask } from '../slices/tasksSlise.js';
import { updateTask, resetTask } from '../slices/newTaskSlise.js';
import Tasks from './Tasks.jsx';

// export default class App extends React.Component {
const App = (props) => {
  const tasks = useSelector((state) => state.tasks);
  const tasksList = Object.values(tasks);
  tasksList.sort((task1, task2) => Math.sign(task2.id - task1.id))

  const dispatch = useDispatch();

  const newTaskText = useSelector((state) => state.newTaskText);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    dispatch(addTask({ text: newTaskText }));
    dispatch(resetTask());
  };

  const handleRemove = (id) => (_event) => {
    dispatch(removeTask({ id }));
  };

  const handleChange = (event) => {
    dispatch(updateTask({ text: event.target.value }));
  };

  return (
    <div className='col-5'>
      <form action='' className='form-inline' onSubmit={handleSubmit}>
        <div className='form-group mx-sm-3'>
          <input type='text' required value={newTaskText} onChange={handleChange}/>
        </div>
        <button type='submit' className='btn btn-primary btn-sm'>Add</button>
      </form>
      { tasksList.length !== 0 ? <Tasks tasks={tasksList} onRemove={handleRemove} /> : null }
    </div>
  );
}

export default App;
