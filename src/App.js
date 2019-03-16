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
    case 'decrement':
      return {
        count: state.count - 1,
      };
    case 'reset':
      return initState;
    default:
      return initState;
  }
};

const incrementAction = {
  type: 'increment',
};

const decrementAction = {
  type: 'decrement',
};

const resetAction = {
  type: 'reset',
};

const App = () => {
  const [resultState, dispatch] = useReducer(reducer, initState);
  const value = useContext(UserContext);

  return (
    <>
      <p>Count: {resultState.count}</p>
      <button
        className="border m-1 p-1"
        onClick={() => dispatch(incrementAction)}
      >
        Increment
      </button>
      <button
        className="border m-1 p-1"
        onClick={() => dispatch(decrementAction)}
      >
        Decrement
      </button>
      <button className="border m-1 p-1" onClick={() => dispatch(resetAction)}>
        Reset
      </button>
    </>
  );
};

export default App;
