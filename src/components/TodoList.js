/* eslint-disable-next-line no-unused-vars */
import React, { useContext, useState } from 'react';
import TodosContext from '../context';
/* eslint-disable-next-line no-unused-vars */
import Todo from './Todo';

const TodoList = () => {
  const { modifiedState: state } = useContext(TodosContext);

  const { todos } = state;
  const title = todos.length ? `${todos.length} Todos` : 'No Todos Yet!';

  const listElem = (
    <ul className="list-reset text-white p-0">
      {todos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      {listElem}
    </div>
  );
};

export default TodoList;
