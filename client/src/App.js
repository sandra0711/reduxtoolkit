import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.css';
import Inputfield from './components/inputField';
import Todolist from './components/todoList';

import { addTodo, fetchTodo } from './store/todoSlice';

function App() {
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.todoses);
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
      <Inputfield title={title} setTitle={setTitle} />
      {
        status === "loading" && <h1>Идет загрузка и ПОКАЗАТЬ СПИНЕР</h1>
      }
      {
        error && <h1>Произошла ошибка {error}</h1>
      }
      <Todolist />
    </div>
  );
}

export default App;
