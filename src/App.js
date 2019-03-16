import React, { useContext, useReducer } from 'react';
import { UserContext } from './index';

const initState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        count: state.count + 1,
      };

    default:
      return initState;
  }
};

const App = () => {
  const [resultState, dispatch] = useReducer(reducer, initState);
  const value = useContext(UserContext);

  return (
    <>
      <p>Count: {resultState.count}</p>
      <button
        className="border p-1"
        onClick={() => dispatch({ type: 'increment' })}
      >
        Increment
      </button>
    </>
  );
};

export default App;
