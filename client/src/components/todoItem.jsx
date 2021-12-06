import React from 'react';
import { useDispatch } from 'react-redux';

import { editTodo, deleteTodo } from '../store/todoSlice';

const Todoitem = ({ id, title, completed, doneTodos }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      <input type="checkbox" checked={completed} onChange={() => {
        dispatch(editTodo({ id }))
      }} />
      <span>{title}</span>
      <span onClick={() => dispatch(deleteTodo({ id }))}>&times;</span>
    </li>
  );
}

export default Todoitem;
