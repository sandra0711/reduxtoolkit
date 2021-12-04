import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodo = createAsyncThunk(
  'todos/fetchTodo',
  async function () {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  }
)

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
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
  },
  extraReducers: {
    [fetchTodo.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTodo.fulfilled]: (state, action) => {
      state.status = 'fulgilled';
      state.todos = action.payload;
    },
    [fetchTodo.rejected]: (state, action) => { },

  }
})

export const { addTodo, removeTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;
