import React from 'react';
import { useSelector } from 'react-redux';
import Tasks from './Tasks.jsx';
import NewTaskForm from './NewTaskForm.jsx';

// export default class App extends React.Component {
const App = (props) => {
  // const tasks = useSelector((state) => state.tasks);
  // const tasksList = Object.values(tasks);
  const tasksIds = useSelector((state) => state.tasks.ids);

  return (
    <div className='col-5'>
      <NewTaskForm />
      { tasksIds.length !== 0 ? <Tasks /> : null }
    </div>
  );
}

export default App;
