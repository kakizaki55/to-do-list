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
        <Header logoutUser={logoutUser}></Header>

        {currentUser ? (
          <>
            <TodoList className="todo-list"></TodoList>
          </>
        ) : (
          <Auth setCurrentUser={setCurrentUser}></Auth>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
