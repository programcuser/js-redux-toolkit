import { createSlice } from '@reduxjs/toolkit';

const newTaskSlise = createSlice({
  name: 'newTaskText',
  initialState: '',
  reducers: {
    updateTask: (state, action) => {
      return action.payload.text;
    },
    resetTask: (state) => {
      return '';
    },
  },
});

export const { updateTask, resetTask } = newTaskSlise.actions;
export default  newTaskSlise.reducer;
