/* eslint-disable-next-line no-unused-vars */
import React, { useContext, useReducer } from 'react';
import TodosContext from './context';
import reducer from './reducer';
/* eslint-disable-next-line no-unused-vars */
import TodoList from './components/TodoList';

const App = () => {
  const initState = useContext(TodosContext);
  const [modifiedState, dispatch] = useReducer(reducer, initState);

  return (
    <TodosContext.Provider value={{ modifiedState, dispatch }}>
      <TodoList />
    </TodosContext.Provider>
  );
};

export default App;
