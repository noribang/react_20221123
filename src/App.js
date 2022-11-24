// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const user = {
  name: "John",
  position: "Head Cook",
  hometown: "Los Angeles, CA"
}

function App() {
  return (
    <div className="App">
      <h1>About Me</h1>
      <ul id="about-me">
        <li>{user.name}</li>
        <li>{user.position}</li>
        <li>{user.hometown}</li>
      </ul>
    </div>
  );
}

export default App;
