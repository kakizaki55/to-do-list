import { React, useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';

export default function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('button clicke');
  };

  return (
    <>
      <div>this is the Auth view</div>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      ></AuthForm>
    </>
  );
}
