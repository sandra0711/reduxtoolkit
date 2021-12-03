import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        isCompleted: false,
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(e => e.id !== action.payload.id);
    },
    doneTodo(state, action) {
      const toggleTodo = state.todos.find(el => el.id === action.payload.id);
      toggleTodo.isCompleted = !toggleTodo.isCompleted;
    }
  }
})

export const { addTodo, removeTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;
