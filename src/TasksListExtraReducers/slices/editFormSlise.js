import { createSlice } from '@reduxjs/toolkit';
import { addTask, removeTask, updateTask }  from './tasksSlise.js';
import { updateUIStateTasks } from './uiStateSlise.js';

const editFormSlise = createSlice({
  name: 'editForm',
  initialState: {},
  reducers: {
    // addEditFormTask: (state, action) => {
    //   const { id } = action.payload;
    //   state[id] = '';
    // },
    // removeEditFormTask: (state, action) => {
    //   const { id } = action.payload;
    //   delete state[id];
    // },
    updateEditForm: (state, action) => {
      const { id, newText } = action.payload;
      state[id] = newText;
    },
    // resetEditForm: (state, action) => {
    //   const { id } = action.payload;
    //   state[id] = '';
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(addTask, (state, action) => {
      const id = action.payload.id;
      state[id] = '';
    });

    builder.addCase(removeTask, (state, action) => {
      const id = action.payload;
      delete state[id];
    });

    builder.addCase(updateUIStateTasks, (state, action) => { // updateTask
      const id = action.payload.id;
      state[id] = '';
    });
  },
});

export const { updateEditForm } = editFormSlise.actions; // , resetEditForm, removeEditFormTask
export default  editFormSlise.reducer;
