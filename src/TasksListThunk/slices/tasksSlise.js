import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import _ from 'lodash';

export const fetchTask = createAsyncThunk(
  'tasks/fetchTask',
  async ({ text }) => {
    const newTask = { id: _.uniqueId(), text };
    return newTask;
  }
);

const tasksAdapter = createEntityAdapter();

const initialState = tasksAdapter.getInitialState({ loading: 'idle', error: null });

const tasksSlise = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: tasksAdapter.addOne,
    updateTask: tasksAdapter.updateOne,
    removeTask: tasksAdapter.removeOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTask.pending, (state) => {
        state.loading = 'loading';
        state.error = null;
      })
      .addCase(fetchTask.fulfilled, (state, action) => {
        tasksAdapter.addOne(state, action.payload);
        // tasksSlise.actions.addTask(action.payload);

        state.loading = 'idle';
        state.error = null;
      })
      .addCase(fetchTask.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error;
      });
  },
});

export const { addTask, removeTask, updateTask } = tasksSlise.actions;
export default tasksSlise.reducer;

export const selectors = tasksAdapter.getSelectors(state => state.tasks);
