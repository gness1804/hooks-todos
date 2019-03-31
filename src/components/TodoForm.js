/* eslint-disable-next-line no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import uuid from 'uuid';
import axios from 'axios';
import TodosContext from '../context';
import { addAction, editAction } from '../actions';
import { todosEndpoint } from '../api';

const TodoForm = () => {
  const {
    dispatch,
    state: { currentTodo, todos },
  } = useContext(TodosContext);
  const [text, setText] = useState(currentTodo.text || '');

  useEffect(() => {
    if (currentTodo.text) {
      setText(currentTodo.text);
    }
  }, [currentTodo.id]);

  useEffect(() => {
    if (!currentTodo.text) {
      setText('');
    }
  }, [todos]);

  // action creators
  const addTodo = todo => ({
    ...addAction,
    todo,
  });

  const editTodo = () => ({
    ...editAction,
    text,
    id: currentTodo.id,
  });

  // regular methods
  const handleOnInputChange = event => {
    setText(event.target.value);
  };

  const todoIsADupe = () => {
    for (const todo of todos) {
      if (todo.text.toLowerCase() === text.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  const handleAddTodo = async () => {
    const newTodo = {
      id: uuid.v4(),
      text,
      complete: false,
    };
    const response = await axios.post(`${todosEndpoint}`, newTodo);
    dispatch(addTodo(response.data));
  };

  const handleEditTodo = async () => {
    await axios.patch(`${todosEndpoint}/${currentTodo.id}`, {
      text,
    });
    dispatch(editTodo());
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!text) {
      alert('Error: you must enter a description for your new todo.');
      return;
    }

    if (todoIsADupe()) {
      alert('Oops! You cannot duplicate todos. Please try again.');
      return;
    }
    if (Object.keys(currentTodo).length) {
      handleEditTodo();
    } else {
      handleAddTodo();
    }
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
