const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO': {
      /* eslint-disable no-confusing-arrow */
      const newTodos = state.todos.map(todo =>
        todo.id === action.id ? { ...todo, complete: !todo.complete } : todo,
      );
      /* eslint-enable no-confusing-arrow */
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
    default:
      return state;
  }
};

export default reducer;
