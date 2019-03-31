// prettier-ignore
/* eslint-disable-next-line no-unused-vars */
import React, {
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
import axios from 'axios';
import TodosContext from './context';
import reducer from './reducer';
/* eslint-disable-next-line no-unused-vars */
import TodoList from './components/TodoList';
/* eslint-disable-next-line no-unused-vars */
import TodoForm from './components/TodoForm';

const useAPI = endpoint => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const result = await axios.get(endpoint);
      setData(result.data);
    } catch (err) {
      throw new Error(`Error fetching data: ${err}`);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return data;
};

const App = () => {
  const initState = useContext(TodosContext);
  const [state, dispatch] = useReducer(reducer, initState);

  const todosEndpoint = 'https://hooks-api.grahamnessler.now.sh/data.json';
  const savedTodos = useAPI(todosEndpoint);
  // TODO: use the reducer to set the state.todos on line 38 to the savedTodos.
  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoList />
      <TodoForm />
    </TodosContext.Provider>
  );
};

export default App;
