import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
// import _ from 'lodash';

const tasksAdapter = createEntityAdapter();

const initialState = tasksAdapter.getInitialState();

const tasksSlise = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: tasksAdapter.addOne,
    updateTask: tasksAdapter.updateOne,
    removeTask: tasksAdapter.removeOne,
  },
});

export const { addTask, removeTask, updateTask } = tasksSlise.actions;
export default tasksSlise.reducer;

export const selectors = tasksAdapter.getSelectors(state => state.tasks);
