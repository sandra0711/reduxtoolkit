import { useState } from 'react';

import './App.css';
import Inputfield from './components/inputField';
import Todolist from './components/todoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          isCompleted: false
        }
      ]
      );
      setText('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((e) => e.id !== id))
  };

  const doneTodos = (id) => {
    setTodos(todos.map(e => {
      if (e.id !== id) {
        return e;
      }
      return { ...e, isCompleted: !e.isCompleted }
    }));
  };

  return (
    <div className="App">
      <Inputfield text={text} setText={setText} addTodo={addTodo} />
      <Todolist todos={todos} removeTodo={removeTodo} doneTodos={doneTodos} />
    </div>
  );
}

export default App;
