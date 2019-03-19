/* eslint-disable-next-line no-unused-vars */
import React, { useContext } from 'react';
import TodosContext from '../context';
import { toggleAction, deleteAction } from '../actions';

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);

  // action creators
  const toggleTodo = id => ({
    ...toggleAction,
    id,
  });

  const deleteTodo = id => ({
    ...deleteAction,
    id,
  });

  return (
    <li
      key={todo.id}
      className="bg-orange-dark border-black border-dashed border-2 my-2 py-4 flex items-center"
    >
      <span
        className={`cursor-pointer flex-1 ml-12 ${todo.complete &&
          'line-through text-grey-darkest'}`}
      >
        {todo.text}
      </span>
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
        <img
          src="https://icon.now.sh/check/dedede"
          alt="Toggle Icon"
          className="h-6"
        />
      </button>
    </li>
  );
};

export default Todo;
