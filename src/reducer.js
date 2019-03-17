const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO': {
      const targetTodo = state.todos.filter(todo => todo.id === action.id)[0];
      const indexOfTarget = state.todos.indexOf(targetTodo);

      const newTodos = [
        ...state.todos.slice(0, indexOfTarget),
        Object.assign({}, targetTodo, {
          complete: !targetTodo.complete,
        }),
        ...state.todos.slice(indexOfTarget + 1),
      ];

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
