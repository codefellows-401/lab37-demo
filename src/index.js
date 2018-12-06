import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.js';

import Login from './components/auth/login.js';
import './styles.css';

class App extends React.Coponent {
  render() {
    return (
      <LoginContext>
        <Login />
        <hr />
      </LoginContext>
    )
  };
}
