import { createSlice } from '@reduxjs/toolkit';
import { addTask, removeTask, updateTask }  from './tasksSlise.js';
// import _ from 'lodash';

const initialState = {
  tasks: {},
};

const uiStateSlise = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    // addUIStateTasks: (state, action) => {
    //   const { id } = action.payload;
      
    //   state.tasks[id] = { isEditing: false };
    // },
    updateUIStateTasks:  (state, action) => {
      const { id, isEditing } = action.payload;

      Object.assign(state.tasks[id], { isEditing });
    },
    // removeUIStateTasks:  (state, action) => {
    //   const { id } = action.payload;
      
    //   delete state.tasks[id];
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(addTask, (state, action) => {
      const id = action.payload.id;
      
      state.tasks[id] = { isEditing: false };
    });

    builder.addCase(removeTask, (state, action) => {
      const id = action.payload;
      
      delete state.tasks[id];
    });

    builder.addCase(updateTask, (state, action) => {
      const id = action.payload.id;
      state[id] = '';
    });
  },
});

export const { updateUIStateTasks } = uiStateSlise.actions; //addUIStateTasks, removeUIStateTasks
export default uiStateSlise.reducer;
