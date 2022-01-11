import { React, useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';

export default function Auth() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <div>this is the Auth view</div>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
      ></AuthForm>
    </>
  );
}
