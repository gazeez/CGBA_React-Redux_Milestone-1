import React, {Fragment} from 'react';
import { Container, Grid, Button, Header } from 'semantic-ui-react';
import ReactDOM from 'react-dom' //GA
import {BrowserRouter, Switch, Route } from 'react-router-dom' //added GA
import logo from './logo.svg';
import './App.css';
import Login from './components/homepage/login';
import Menu from './components/homepage/Menu';
//import SignUp from './components/homepage/signup'
import { Component } from 'react';
import signin from './components/homepage/login';
//import {Grid} from 'semantic-ui-react';


const App = () => (
  <Fragment>
    <Menu />
    <Container>
      <Login/>
    </Container>
  </Fragment>
);




// function App() {
//   return (
//     <BrowserRouter> 
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         {/* <switch>
//           <Route path='./signin' component={SignIn}/>
//         </switch> */}
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//     </BrowserRouter> //GA
//   );
// }

export default App;
