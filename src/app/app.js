import React from 'react';
import LoginContext from '../compontents/auth/context';
import Login from '../compontents/auth/login';
import Auth from '../compontents/auth/login';

class App extends React.Component {
  render() {
    return (
      <LoginContext>
        <Login />
        <hr />;
        <Auth capability="delete">
          <h1>Gregor is Cute</h1>
        </Auth>
      </LoginContext>
    );
  }
}

export default App;