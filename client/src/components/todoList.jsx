import React from 'react';
import { useSelector } from 'react-redux';
import Todoitem from './todoItem';

const Todolist = () => {
  const todos = useSelector(state => state.todoses.todos);
  return (
    <ul>
      {todos.map(el => {
        console.log(el)
        return (
          <Todoitem id={el.id} title={el.title} isCompleted={el.isCompleted} key={el.id} />
        )
      })}
    </ul>
  );
}

export default Todolist;
