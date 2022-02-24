import React from 'react';
import { useRef } from 'react';
import './register.css';

import { useNavigate } from 'react-router'

import axios from 'axios';

function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const history = useNavigate();

  async function handleClick(e) {
    e.preventDefault();
    // @ts-ignore
    if (password.current.value !== passwordAgain.current.value) {
      // @ts-ignore
      password.current.setCustomValidity("Passwords don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history('/login');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="login">
      <span className="logo appName">MatkoSocial</span>
      <div className="loginWrapper">
        <div className="topText">
          <h1>Register</h1>
          <h3 className="welcomeBackText">Welcome to MatkoSocial</h3>
        </div>
        <form className="loginBox" onSubmit={handleClick}>
          <input
            type="email"
            placeholder="Email"
            required
            ref={email}
            className="loginInput"
          />
          <input
            placeholder="Name"
            required
            ref={username}
            className="loginInput"
          />
          <input
            type="password"
            placeholder="Password"
            required
            ref={password}
            className="loginInput"
            // @ts-ignore
            minLength="8"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            ref={passwordAgain}
            className="loginInput"
          />

          <button className="loginButton" type="submit">
            Register
          </button>
          <div className="loginBottom">
            <span>Already have account?</span>
            <span className="loginForgot">Sign in!</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
