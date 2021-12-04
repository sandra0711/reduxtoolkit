import React from 'react';

const Inputfield = ({ title, setTitle, submitHandler }) => {
  return (
    <label>
      <input
        value={title}
        placeholder='Что еще нужно сделать?'
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={submitHandler}>Добавить к списку</button>
    </label>
  );
}

export default Inputfield;
