import { React, useState } from 'react';
import AuthForm from '../../components/AuthForm/AuthForm.js';
import { signUpUser, signInUser } from '../../services/fetchData.js';

export default function Auth({ setCurrentUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [type, setType] = useState('signin');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data =
        type === 'signin' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(data);
    } catch {
      setErrorMessage('Oops looks like somthing went wrong, please try again');
    }
  };

  return (
    <>
      <div>this is the Auth view</div>
      <p>{errorMessage}</p>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        setType={setType}
        type={type}
      ></AuthForm>
    </>
  );
}
