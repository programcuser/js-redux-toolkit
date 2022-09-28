import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {};

const tasksSlise = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const id = _.uniqueId();
      const newTask = { [id]: { id, text: action.payload.text } };
      return { ...state, ...newTask };
    },
    removeTask: (state, action) => {
      return _.omit(state, [action.payload.id]);
    },
  },
});

export const { addTask, removeTask } = tasksSlise.actions;
export default tasksSlise.reducer;
