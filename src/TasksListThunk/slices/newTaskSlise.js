import { createSlice } from '@reduxjs/toolkit';
import { fetchTask }  from './tasksSlise.js';

const newTaskSlise = createSlice({
  name: 'newTaskText',
  initialState: '',
  reducers: {
    updateTask: (state, action) => {
      return action.payload.text;
    },
    // resetTask: (state) => {
    //   return '';
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTask.fulfilled, (state) => {
      return '';
    });
  },
});

export const { updateTask } = newTaskSlise.actions; // , resetTask
export default  newTaskSlise.reducer;
