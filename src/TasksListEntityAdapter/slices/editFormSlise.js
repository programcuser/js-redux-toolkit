import { createSlice } from '@reduxjs/toolkit';

const editFormSlise = createSlice({
  name: 'editForm',
  initialState: {},
  reducers: {
    addEditFormTask: (state, action) => {
      const { id } = action.payload;
      state[id] = '';
    },
    removeEditFormTask: (state, action) => {
      const { id } = action.payload;
      delete state[id];
    },
    updateEditForm: (state, action) => {
      const { id, newText } = action.payload;
      state[id] = newText;
    },
    resetEditForm: (state, action) => {
      const { id } = action.payload;
      state[id] = '';
    },
  },
});

export const { updateEditForm, resetEditForm, removeEditFormTask } = editFormSlise.actions;
export default  editFormSlise.reducer;
