import React {Component} from 'react'; // added component GA
import {BrowswerRouter, Switch, Route } from 'react-router-dom  ' //added GA
import logo from './logo.svg';
import './App.css';
import SignIn from './components/homepage/Signin'

function App() {
  return (
    <BrowswerRouter> 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <switch>
          <Route path='./signin' component={SignIn}/>
        </switch>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </BrowswerRouter> //GA
  );
}

export default App;
