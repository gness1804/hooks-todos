import React, { useContext } from 'react';
import { UserContext } from './index';

const App = () => {
  const value = useContext(UserContext);

  return (
    <>
      <div>Hello, {value}</div>
    </>
  );
};

export default App;
