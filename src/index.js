import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const UserContext = React.createContext();

const username = 'Graham';

ReactDOM.render(
  <UserContext.Provider value={username}>
    <App />
  </UserContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/* eslint-disable import/prefer-default-export */
export { UserContext };
/* eslint-enable import/prefer-default-export */
