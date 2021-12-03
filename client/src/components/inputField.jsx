import React from 'react';

const Inputfield = ({ text, setText, addTodo }) => {
  return (
    <label>
      <input
        value={text}
        placeholder='Что еще нужно сделать?'
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Добавить к списку</button>
    </label>
  );
}

export default Inputfield;
