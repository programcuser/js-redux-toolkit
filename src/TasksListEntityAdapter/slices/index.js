import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlise.js';
import newTaskReducer from './newTaskSlise.js';
import uiStateReducer from './uiStateSlise.js';
import editFormReducer from './editFormSlise.js';

export default configureStore({
  reducer: {
    tasks: tasksReducer,
    newTaskText: newTaskReducer,
    uiState: uiStateReducer,
    editForm: editFormReducer,
  },
});
