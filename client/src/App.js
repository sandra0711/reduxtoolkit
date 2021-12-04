import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Inputfield from './components/inputField';
import Todolist from './components/todoList';

import { addTodo, fetchTodo } from './store/todoSlice';

function App() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const addTask = () => {
    dispatch(addTodo({ title }));
    setTitle('');
  }

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  return (
    <div className="App">
      <Inputfield title={title} settitle={setTitle} submitHandler={addTask} />
      <Todolist />
    </div>
  );
}

export default App;
