import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
} from "react-router-dom";
// import App from './App';
import SignUp from './signup';
import LogIn from './login';
import Notfound from './404';
import LoggedIn from './loggedin';
import * as serviceWorker from './serviceWorker';

class Routing extends React.Component {
  render() {

    return ( <
      Router >
      <
      div className = "Main" >
      <
      Switch >
      <
      Route exact path = "/"
      component = {
        SignUp
      }
      /> <
      Route path = "/signup"
      component = {
        SignUp
      }
      /> <
      Route path = "/login"
      component = {
        LogIn
      }
      /> <
      Route path = "/loggedin"
      component = {
        LoggedIn
      }
      /> <
      Route component = {
        Notfound
      }
      /> <
      /Switch> <
      /div> <
      /Router>
    );
  }
}


ReactDOM.render( < Routing / > , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();