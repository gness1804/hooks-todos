import React from 'react';
import todos from './data/todos';

const TodosContext = React.createContext({
  todos,
});

export default TodosContext;
