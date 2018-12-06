import superagent from 'superagent';
import React from 'react';
import { LoginContext } from './context';

const API = 'https://javascript-401-api.herokuapp.com';

const If = (props) => {
  return !!props ? props.children : null;
};

class Login extends React.compontent{
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  handleSubmit = (event, contextLoginHandler) => {
    event.preventDefault();
    const {username, password} = this.state;
    superagent
      .post(`${API}/signin`)
      .auth(username, password)
      .then(response => {
        const token = response.text;
        contextLoginHandler(token);
      })
      .catch(console.error);
  };

  handleChange = (event) => {
    const { name, value } = event.target; // event.target.name && event.target.value
    this.setState(
      {
        [name]: value
      }),
  };

  render() {
    return(
      <LoginContext.Consumer>
        {
          {context => return(
            <div>
              <h2>{context.token}</h2>
              <If condition={context.loggedIn}>
                <button
              </If>
              <If condition={context.loggedOut}>
                <form onSubmit={(event) => this.handleSubmit('BANANA')}>
                  <input 
                    type="text" 
                    placeholder="username" 
                    name="username" 
                    onChange={this.handleChange}
                  />
                  <input 
                    type="password" 
                    placeholder="password" 
                    name="password" 
                    onChange={this.handleChange}
                  />
                  <button type="submmit">Login</button>
                </form>
              </If>
            </div>
          },
        }
      </LoginContext.Consumer>
    );
  };
};

export default Login;