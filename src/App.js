import './App.css';
import { React, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Auth from './views/Auth/Auth';
import { getUser, logout } from './services/fetchUser';
import TodoList from './views/TodoList/TodoList';

function App() {
  const [currentUser, setCurrentUser] = useState(getUser());

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>

        {currentUser ? (
          <>
            <div>this is the logged in page</div>
            <TodoList></TodoList>
            <button onClick={logoutUser}>logout</button>
          </>
        ) : (
          <Auth setCurrentUser={setCurrentUser}></Auth>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
