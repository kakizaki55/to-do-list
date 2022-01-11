import './App.css';
import React from 'react';
import { BrowserRouter, NavLinkm, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Auth from './views/Auth/Auth';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Auth></Auth>
      </BrowserRouter>
    </div>
  );
}

export default App;
