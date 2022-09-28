import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlise.js';
import newTaskReducer from './newTaskSlise.js';

// const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__;

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    newTaskText: newTaskReducer,
  },
  // middleware: [reduxDevtools && reduxDevtools()],
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxDevtools && reduxDevtools()),
});
