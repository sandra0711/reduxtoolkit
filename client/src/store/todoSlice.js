import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodo = createAsyncThunk(
  'todos/fetchTodo',
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      if (!response.ok) throw new Error('Ошибка сервера');
      const data = await response.json();
      return data;
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async function ({ id }, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'delete',
      });
      if (!response.ok) throw new Error('Ошибка удаления');
      dispatch(removeTodo({ id }));
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
);

export const editTodo = createAsyncThunk(
  'todos/editTodo',
  async function ({ id }, { rejectWithValue, dispatch, getState }) {
    const todo = getState().todoses.todos.find(e => e.id === id)
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          completed: !todo.completed,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) throw new Error('Ошибка опять');
      dispatch(doneTodo({ id }));
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
);

export const addNewTodo = createAsyncThunk(
  'todos/addNewTodo',
  async function ({ title }, { rejectWithValue, dispatch }) {
    try {
      const todo = {
        iserId: 1,
        title: title,
        completed: false,
      };
      const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      if (!response.ok) throw new Error('Ошибка опять');
      const data = await response.json();
      dispatch(addTodo(data));
    } catch (e) {
      return rejectWithValue(e.message)
    }
  },
);

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload)
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(e => e.id !== action.payload.id);
    },
    doneTodo(state, action) {
      const toggleTodo = state.todos.find(el => el.id === action.payload.id);
      toggleTodo.completed = !toggleTodo.completed;
    }
  },
  extraReducers: {
    [fetchTodo.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [fetchTodo.fulfilled]: (state, action) => {
      state.status = 'fulfilled';
      state.todos = action.payload;
    },
    [fetchTodo.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [editTodo.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
    [addNewTodo.rejected]: (state, action) => {
      state.status = 'rejected';
      state.error = action.payload;
    },
  }
})

export const { addTodo, removeTodo, doneTodo } = todoSlice.actions;
export default todoSlice.reducer;
