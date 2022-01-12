import React from 'react';
import classNames from 'classnames';
import './AuthForm.css';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  setType,
  type,
}) {
  return (
    <>
      <div>
        <h1>Login Page:</h1>
        <div>
          <h5
            onClick={() => setType('signup')}
            className={classNames({ active: type === 'signup' })}
          >
            Sign Up
          </h5>
        </div>
        <div>
          <h5
            onClick={() => setType('signin')}
            className={classNames({ active: type === 'signin' })}
          >
            Sign In
          </h5>
        </div>

        <form>
          <label>Email:</label>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <label>Password:</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </>
  );
}
