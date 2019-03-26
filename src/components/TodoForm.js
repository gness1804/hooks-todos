/* eslint-disable-next-line no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import uuid from 'uuid';
import TodosContext from '../context';
import { addAction, editAction } from '../actions';

const TodoForm = () => {
  const { dispatch, state: { currentTodo } } = useContext(TodosContext);
  const [text, setText] = useState(currentTodo.text || '');

  useEffect(() => {
    if (currentTodo.text) {
      setText(currentTodo.text);
    }
  }, [currentTodo.id]);

  // action creators
  const addTodo = () => {
    if (Object.keys(currentTodo).length) {
      return {
        ...editAction,
        text,
        id: currentTodo.id,
      };
    }
    return {
      ...addAction,
      todo: {
        id: uuid.v4(),
        text,
        complete: false,
      },
    };
  };

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

  return (
    <form onSubmit={handleSubmit} className="flex justify-center p-5">
      <input
        type="text"
        className="border-black border-solid border-2"
        placeholder="Description"
        onChange={handleOnInputChange}
        value={text}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TodoForm;
