import { useState } from 'react';

import './App.css';

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
      <label>
        <input
          value={text}
          placeholder='Что еще нужно сделать?'
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTodo}>Добавить к списку</button>
      </label>
      <ul>
        {todos.map(el => {
          return (
            <li key={el.id}>
              <input type="checkbox" checked={el.isCompleted} onChange={() => { doneTodos(el.id) }} />
              <span>{el.text}</span>
              <span onClick={() => removeTodo(el.id)}>&times;</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
