import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlise.js';
import newTaskReducer from './newTaskSlise.js';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    newTaskText: newTaskReducer,
  },
});
