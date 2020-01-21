import React from 'react';
import logo from './logo.svg';
import './signup.js';
import './styles/App.css';

export class LogIn extends React.Component {
   constructor() {
      super();
      this.state = {
         email : '', 
         password : ''
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(e) {
      console.log(e);
      this.setState({
         
         [e.target.id]: e.target.value
      })
   }

   handleSubmit(e) {
      e.preventDefault();
      console.log('The form was submitted with the following data');
      console.log(this.state);

      //redirecting to loggedin page
      let path = `./loggedin`;
      this.props.history.push(path); 

      
      fetch('http://snapchat.wac.under-wolf.eu/connection', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body:JSON.stringify( {
            "email": this.state.email,
            "password": this.state.password
         })
      }) 
      .then(response => response.json())
      .then(data => {
         console.log('data:');
         console.log("email:", this.state.email);
         localStorage.setItem("token", data.data.token);
         var tok = localStorage.getItem("token");
         console.log("Token:", tok);
      });
   }
   
   render() {
      return (
         <div className="App">
            <div className="App__Form">
               <div className="PageSwitcher">
                  <a href="/login" className="PageSwitcher__Item">Login</a>
                  <a href="/signup" className="PageSwitcher__Item PageSwitcher__Item--Active">Signup</a>
               </div>
            </div>
            <div className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <br />
               <div className="FormMain">
                  <form className="JoinForm" onSubmit={this.handleSubmit}>

                     <div className="FormField">
                        <label className="FormField__Label" htmlFor="email">E-mail: </label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email"
                           name="email" value={this.state.email} onChange={this.handleChange} />
                     </div>

                     <div className="FormField">
                        <label className="FormField__Label" htmlFor="pass">Password: </label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password"
                           name="password" value= {this.state.password} onChange={this.handleChange} />
                     </div>

                     <div className="FormField">
                        <button type="submit" className="FormField__Button mr-20">login</button>
                     </div>

                  </form>
               </div>
            </div>
         </div>
      );
   }
}

export default LogIn;