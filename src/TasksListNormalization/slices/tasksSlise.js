import { createSlice } from '@reduxjs/toolkit';
// import _ from 'lodash';

const tasksSlise = createSlice({
  name: 'tasks',
  initialState: {
    ids: [],
    entities: {},
  },
  reducers: {
    addTask: (state, action) => {
      const { task } = action.payload;
      // const newTask = { [task.id]: task };
      // return { ...state, ...newTask };
      state.entities[task.id] = task;
      state.ids.unshift(task.id);
    },
    removeTask: (state, action) => {
      // return _.omit(state, [action.payload.id]);
      const { id } = action.payload;

      delete state.entities[id];
      state.ids = state.ids.filter((currId) => currId !== id);
    },
  },
});

export const { addTask, removeTask } = tasksSlise.actions;
export default tasksSlise.reducer;
