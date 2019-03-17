/* eslint-disable-next-line no-unused-vars */
import React, { useContext } from 'react';
import TodosContext from '../context';

const TodoList = () => {
  const { /* dispatch, */ modifiedState: state } = useContext(TodosContext);
  const { todos } = state;
  const title = todos.length ? `${todos.length} Todos` : 'No Todos Yet!';

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="bg-orange-dark border-black border-dashed border-2 my-2 py-4"
          >
            <span className="cursor-pointer">{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
