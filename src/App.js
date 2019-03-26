/* eslint-disable-next-line no-unused-vars */
import React, { useContext, useReducer } from 'react';
import TodosContext from './context';
import reducer from './reducer';
/* eslint-disable-next-line no-unused-vars */
import TodoList from './components/TodoList';
/* eslint-disable-next-line no-unused-vars */
import TodoForm from './components/TodoForm';

const App = () => {
  const initState = useContext(TodosContext);
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
      <TodoForm />
    </TodosContext.Provider>
  );
};

export default App;
