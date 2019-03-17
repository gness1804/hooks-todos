/* eslint-disable-next-line no-unused-vars */
import React, { useContext } from 'react';
import TodosContext from '../context';
import { toggleAction, deleteAction } from '../actions';

const TodoList = () => {
  const { dispatch, modifiedState: state } = useContext(TodosContext);
  const { todos } = state;
  const title = todos.length ? `${todos.length} Todos` : 'No Todos Yet!';

  const toggleTodo = id => ({
    ...toggleAction,
    id,
  });

  const deleteTodo = id => ({
    ...deleteAction,
    id,
  });

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      <ul className="list-reset text-white p-0">
        {todos.map(todo => (
          <li
            key={todo.id}
            className="bg-orange-dark border-black border-dashed border-2 my-2 py-4 flex items-center"
          >
            <span className="cursor-pointer flex-1 ml-12">{todo.text}</span>
            <button>
              <img
                src="https://icon.now.sh/edit/0050c5"
                alt="Edit Icon"
                className="h-6"
              />
            </button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              <img
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete Icon"
                className="h-6"
              />
            </button>
            <button onClick={() => dispatch(toggleTodo(todo.id))}>
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
