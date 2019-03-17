/* eslint-disable-next-line no-unused-vars */
import React, { useContext } from 'react';
import TodosContext from '../context';

const TodoList = () => {
  // TODO: re-add dispatch to destructring assignment below
  const { modifiedState: state } = useContext(TodosContext);
  const { todos } = state;

  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
