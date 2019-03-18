/* eslint-disable-next-line no-unused-vars */
import React, { useContext, useState } from 'react';
import uuid from 'uuid';
import TodosContext from '../context';
import { toggleAction, deleteAction, addAction } from '../actions';

const TodoList = () => {
  const { dispatch, modifiedState: state } = useContext(TodosContext);
  const [text, setText] = useState('');

  const { todos } = state;
  const title = todos.length ? `${todos.length} Todos` : 'No Todos Yet!';

  // action creators
  const toggleTodo = id => ({
    ...toggleAction,
    id,
  });

  const deleteTodo = id => ({
    ...deleteAction,
    id,
  });

  const addTodo = () => ({
    ...addAction,
    todo: {
      id: uuid.v4(),
      text,
      complete: false,
    },
  });

  // regular methods
  const handleOnInputChange = event => {
    setText(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!text) {
      alert('Error: you must enter a description for your new todo.');
      return;
    }
    dispatch(addTodo());
    setText('');
  };

  const listElem = (
    <ul className="list-reset text-white p-0">
      {todos.map(todo => (
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
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-bold">{title}</h1>
      {listElem}
      <form onSubmit={handleSubmit}>
        <h2>Create New Todo</h2>
        <input
          type="text"
          placeholder="Description"
          onChange={handleOnInputChange}
          value={text}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TodoList;
