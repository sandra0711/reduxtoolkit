import React from 'react';
import { useDispatch } from 'react-redux';

import { removeTodo, doneTodo } from '../store/todoSlice';

const Todoitem = ({ id, text, isCompleted, doneTodos }) => {
  const dispatch = useDispatch();
  console.log(id, text);
  return (
    <li key={id}>
      <input type="checkbox" checked={isCompleted} onChange={() => dispatch(doneTodo({ id }))} />
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
    </li>
  );
}

export default Todoitem;
