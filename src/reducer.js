const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO': {
      /* eslint-disable no-confusing-arrow */
      const newTodos = state.todos.map(todo =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo,
      );
      return Object.assign({}, state, {
        todos: newTodos,
      });
    }
    case 'DELETE_TODO': {
      const filteredTodos = state.todos.filter(todo => todo.id !== action.id);
      return Object.assign({}, state, {
        todos: filteredTodos,
      });
    }
    case 'ADD_TODO': {
      const newTodos = [...state.todos, action.todo];
      return Object.assign({}, state, {
        todos: newTodos,
      });
    }
    case 'EDIT_TODO': {
      const newTodos = state.todos.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo,
      );
      return Object.assign({}, state, {
        todos: newTodos,
        currentTodo: {},
      });
    }
    case 'ASSIGN_CURR_TODO': {
      return Object.assign({}, state, {
        currentTodo: action.todo,
      });
    }
    default:
      return state;
    /* eslint-enable no-confusing-arrow */
  }
};

export default reducer;
