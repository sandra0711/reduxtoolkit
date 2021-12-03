import React from 'react';

const Todoitem = ({ el, doneTodos, removeTodo }) => {
  return (
    <li key={el.id}>
      <input type="checkbox" checked={el.isCompleted} onChange={() => { doneTodos(el.id) }} />
      <span>{el.text}</span>
      <span onClick={() => removeTodo(el.id)}>&times;</span>
    </li>
  );
}

export default Todoitem;
