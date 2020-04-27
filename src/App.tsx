import React, {Component, Fragment} from 'react';
import { Container, Grid, Button, Header } from 'semantic-ui-react';
import ReactDOM from 'react-dom' //GA
import {BrowserRouter, Switch, Route } from 'react-router-dom' //added GA
import logo from './logo.svg';
import './App.css';
import Login from './components/homepage/login';
import Menu from './components/homepage/menu';
import Signup from './components/homepage/signup';

//import {Component} from 'react';

export interface IAppProps {

}

export default class App extends React.Component<IAppProps>  {
  public render (){
    return (
      <Fragment>
        <switch> 
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={Signup}/>
          </switch>

      <Menu />
      <Container>
        <Login/>
        <Signup/>
      </Container>
    </Fragment>
    )
  }
}


// const App = () => (
//   <Fragment>
//     <Menu />
//     <Container>
//       <Login/>
//     </Container>
//   </Fragment>
// );




// function () {
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

// export default App;
