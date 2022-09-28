import React from 'react';
import { useSelector } from 'react-redux';
import { selectors } from '../slices/tasksSlise.js';
import Tasks from './Tasks.jsx';
import NewTaskForm from './NewTaskForm.jsx';

// export default class App extends React.Component {
const App = (props) => {
  // const tasksIds = useSelector((state) => state.tasks.ids);
  const totalCount = useSelector(selectors.selectTotal);

  return (
    <div className='col-5'>
      <NewTaskForm />
      { totalCount !== 0 ? <Tasks /> : null }
    </div>
  );
}

export default App;
