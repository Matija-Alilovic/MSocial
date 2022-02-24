// @ts-nocheck
import './login.css';

import { useRef, useContext } from 'react';
import { loginCall } from '../../apiCalls';

import { AuthContext } from '../../context/AuthContext';
import { CircularProgress } from '@material-ui/core';
import React from 'react';

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);

  return (
    <div className="login">
      <span className="logo appName">MatkoSocial</span>
      <div className="loginWrapper">
        <div className="topText">
          <h1>Sign in</h1>
          <h3 className="welcomeBackText">Welcome back you've been missed!</h3>
        </div>
        <form className="loginBox" onSubmit={handleFormSubmit}>
          <input
            placeholder="Email"
            type="email"
            required
            className="loginInput"
            ref={email}
          />
          <input
            placeholder="Password"
            type="password"
            required
            minLength="8"
            className="loginInput"
            ref={password}
          />
          <div className="bottomLogin">
            <span></span>
            <span className="loginForgot">Forgot Password?</span>
          </div>
          <button type="submit" className="loginButton">
            {isFetching ? <CircularProgress /> : 'Sign In'}
          </button>
          <div className="loginBottom">
            <span>You don't have account?</span>
            <span className="loginForgot">
              {isFetching ? <CircularProgress /> : 'Sign up'}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
