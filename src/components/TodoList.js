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
            <button>
              <img
                src="https://icon.now.sh/delete/8b0000"
                alt="Delete Icon"
                className="h-6"
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
