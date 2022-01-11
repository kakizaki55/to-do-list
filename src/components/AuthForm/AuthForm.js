import React from 'react';

export default function AuthForm({ email, setEmail, password, setPassword }) {
  return (
    <>
      <div>
        <h1>sign up page:</h1>
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
        </form>
      </div>
    </>
  );
}
