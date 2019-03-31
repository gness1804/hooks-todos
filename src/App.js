// prettier-ignore
/* eslint-disable-next-line no-unused-vars */
import React, {
  useContext,
  useReducer,
  useEffect,
} from 'react';
import axios from 'axios';
import TodosContext from './context';
import reducer from './reducer';
/* eslint-disable-next-line no-unused-vars */
import TodoList from './components/TodoList';
/* eslint-disable-next-line no-unused-vars */
import TodoForm from './components/TodoForm';
import { getTodosFromAPIAction } from './actions';
import { todosEndpoint } from './api';

const App = () => {
  const initState = useContext(TodosContext);
  const [state, dispatch] = useReducer(reducer, initState);

  // action creators
  const getTodosFromAPI = todos => ({
    ...getTodosFromAPIAction,
    todos,
  });

  const getTodos = async () => {
    try {
      const result = await axios.get(todosEndpoint);
      dispatch(getTodosFromAPI(result.data));
    } catch (err) {
      throw new Error(`Error fetching data: ${err}`);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
      <TodoForm />
    </TodosContext.Provider>
  );
};

export default App;
