// import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

const user = {
  name: "John",
  position: "Head Cook",
  hometown: "Los Angeles, CA"
}

const className = "about-me-item"



function createCard() {
  return 1+1;
}

function getColor(isRed) {
  if (isRed) {
    return "red"
  } else {
    return "blue"
  }
}

function App() {
  return (
    <React.Fragment>
      <h1>About Me</h1>
      <p>{getColor()}</p>
      <p>{createCard()}</p>
      <ul id="about-me">
        <li className={className}>name: {user.name}</li>
        <li className={className}>position: {user.position}</li>
        <li className={className}>hometown: {user.hometown}</li>
      </ul>
    </React.Fragment>
  );
}

export default App;
