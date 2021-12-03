import React from 'react';
import Todoitem from './todoItem';

const Todolist = ({ todos, doneTodos, removeTodo }) => {
  return (
    <ul>
      {todos.map(el => {
        return (
          <Todoitem el={el} removeTodo={removeTodo} doneTodos={doneTodos} key={el.id} />
        )
      })}
    </ul>
  );
}

export default Todolist;
