/* eslint-disable-next-line no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import TodosContext from '../context';
import { toggleAction, deleteAction, editAction } from '../actions';

const Todo = ({ todo }) => {
  const { dispatch } = useContext(TodosContext);
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  useEffect(() => {
    if (isEditing) {
      document.querySelector('.todo-text-input').focus();
    }
  }, [isEditing]);

  // action creators
  const toggleTodo = id => ({
    ...toggleAction,
    id,
  });

  const deleteTodo = id => ({
    ...deleteAction,
    id,
  });

  const editTodo = _todo => ({
    ...editAction,
    todo: _todo,
  });

  // regular methods
  const toggleIsEditing = () => {
    if (isEditing) {
      if (!text) {
        alert('Error: there must be text to edit the todo. Please try again.');
        return;
      }
      const newTodo = {
        ...todo,
        text,
      };
      dispatch(editTodo(newTodo));
    }
    setIsEditing(prevState => !prevState);
  };

  const handleOnInputChange = event => {
    setText(event.target.value);
  };

  return (
    <li
      key={todo.id}
      className="bg-orange-dark border-black border-dashed border-2 my-2 py-4 flex items-center"
    >
      {!isEditing ? (
        <span
          className={`cursor-pointer flex-1 ml-12 ${todo.complete &&
            'line-through text-grey-darkest'}`}
        >
          {todo.text}
        </span>
      ) : (
        <input
          type="text"
          value={text}
          onChange={handleOnInputChange}
          className="todo-text-input"
        />
      )}
      <button onClick={toggleIsEditing}>
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
