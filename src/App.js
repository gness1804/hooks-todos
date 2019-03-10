import React from 'react';
import { UserContext } from './index';

const App = () => {
  return (
    <>
      <UserContext.Consumer>
        {value => <div>Hello, {value}</div>}
      </UserContext.Consumer>
    </>
  );
};

export default App;
