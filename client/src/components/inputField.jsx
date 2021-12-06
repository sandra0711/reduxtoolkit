import React from 'react';
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../store/todoSlice';
const Inputfield = ({ title, setTitle }) => {
  const dispatch = useDispatch();
  return (
    <label>
      <input
        value={title}
        placeholder='Что еще нужно сделать?'
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => dispatch(addNewTodo({ title }))}>Добавить к списку</button>
    </label>
  );
}

export default Inputfield;
