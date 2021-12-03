import { useState } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import Inputfield from './components/inputField';
import Todolist from './components/todoList';

import { addTodo } from './store/todoSlice';

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  }
  // const doneTodos = (id) => {
  //   setTodos(todos.map(e => {
  //     if (e.id !== id) {
  //       return e;
  //     }
  //     return { ...e, isCompleted: !e.isCompleted }
  //   }));
  // };

  return (
    <div className="App">
      <Inputfield text={text} setText={setText} submitHandler={addTask} />
      <Todolist />
    </div>
  );
}

export default App;
