/* eslint-disable-next-line no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import TodosContext from '../context';
// prettier-ignore
import {
  toggleAction,
  deleteAction,
  assignCurrentTodoAction,
} from '../actions';
import { todosEndpoint } from '../api';

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);

  // action creators
  const toggleTodo = _todo => ({
    ...toggleAction,
    todo: _todo,
  });

  const deleteTodo = id => ({
    ...deleteAction,
    id,
  });

  const assignCurrentTodo = _todo => ({
    ...assignCurrentTodoAction,
    todo: _todo,
  });

  // regular methods
  const deleteTodoHandler = async id => {
    await axios.delete(`${todosEndpoint}/${id}`);
    dispatch(deleteTodo(id));
  };

  const toggleTodoHandler = async (id, complete) => {
    const response = await axios.put(`${todosEndpoint}/${id}`, {
      ...todo,
      id,
      complete: !complete,
    });
    dispatch(toggleTodo(response.data));
  };

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
      <button onClick={() => dispatch(assignCurrentTodo(todo))}>
        <img
          src="https://icon.now.sh/edit/0050c5"
          alt="Edit Icon"
          className="h-6"
        />
      </button>
      <button onClick={() => deleteTodoHandler(todo.id)}>
        <img
          src="https://icon.now.sh/delete/8b0000"
          alt="Delete Icon"
          className="h-6"
        />
      </button>
      <button onClick={() => toggleTodoHandler(todo.id, todo.complete)}>
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
