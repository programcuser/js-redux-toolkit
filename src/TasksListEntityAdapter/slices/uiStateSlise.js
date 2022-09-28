import { createSlice } from '@reduxjs/toolkit';
// import _ from 'lodash';

const initialState = {
  tasks: {},
};

const uiStateSlise = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    addUIStateTasks: (state, action) => {
      const { id } = action.payload;
      
      state.tasks[id] = { isEditing: false };
    },
    updateUIStateTasks:  (state, action) => {
      const { id, isEditing } = action.payload;

      Object.assign(state.tasks[id], { isEditing });
    },
    removeUIStateTasks:  (state, action) => {
      const { id } = action.payload;
      
      delete state.tasks[id];
    },
  },
});

export const { addUIStateTasks, updateUIStateTasks, removeUIStateTasks } = uiStateSlise.actions;
export default uiStateSlise.reducer;
