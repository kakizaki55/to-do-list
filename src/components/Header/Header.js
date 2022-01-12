import React from 'react';
import './Header.css';

export default function Header({ logoutUser }) {
  return (
    <header>
      <h1>Todo Manager</h1>
      <div className="logout-header">
        <h3 className="logout-button" onClick={logoutUser}>
          logout
        </h3>
      </div>
    </header>
  );
}
