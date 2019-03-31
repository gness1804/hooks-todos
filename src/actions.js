const toggleAction = {
  type: 'TOGGLE_TODO',
  id: undefined,
};

const deleteAction = {
  type: 'DELETE_TODO',
  id: undefined,
};

const addAction = {
  type: 'ADD_TODO',
  todo: {},
};

const editAction = {
  type: 'EDIT_TODO',
  text: '',
  id: undefined,
};

const assignCurrentTodoAction = {
  type: 'ASSIGN_CURR_TODO',
  todo: {},
};

const getTodosFromAPIAction = {
  type: 'GET_TODOS_FROM_API',
  todos: [],
};

// prettier-ignore
export {
  toggleAction,
  deleteAction,
  addAction,
  editAction,
  assignCurrentTodoAction,
  getTodosFromAPIAction,
};
