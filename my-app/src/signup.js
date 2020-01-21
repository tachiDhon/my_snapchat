import React from 'react';
import logo from './logo.svg';
import './styles/App.css';
import {LogIn} from './login';

class SignUp extends React.Component {
   constructor() {
      super();
      this.state = {
         email : '', 
         password : '',
         hasAccount: false
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   changeState() {
      this.setState(prevState => ({ hasAccount: !prevState.hasAccount}))
   }

   handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
   }

   handleSubmit(e) {
      e.preventDefault();
      console.log('The form was submitted with the following data');
      console.log(this.state);

      //redirecting to login page
      let path = `./login`;
      this.props.history.push(path); 

      // console.log("data:");
      // console.log("email:", this.state.email)
      fetch('http://snapchat.wac.under-wolf.eu/inscription', {
         method: 'post',
         headers: {'Content-Type':'application/json'},
         body:JSON.stringify( {
            "email": this.state.email,
            "password": this.state.password
         })
      }) 
      .then(response => response.json())
      .then(data => {
         console.log("data:")
         console.log("email:", data.data.email);
      });
   }

   render() {
      if(!this.state.hasAccount) {
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
                           <input type={this.state.email} onChange={this.handleChange} id="email" className="FormField__Input" placeholder="Enter your email"
                              name="email" />
                        </div>
   
                        <div className="FormField">
                           <label className="FormField__Label" htmlFor="password">Password: </label>
                           <input type="password" id="password" onChange={this.handleChange} className="FormField__Input" placeholder="Enter your Password"
                              name="password" />
                        </div>
   
                        <div className="FormField">
                           <input type="checkbox" name="hasAgreed" onChange={this.handleChange} />
                           <span className="FormField__Checkbox">I agree to all statements in</span>
                           <a href="/terms" className="FormField__TermsLink">terms of service</a>
                        </div>
   
                        <div className="FormField">
                           <button type="submit" className="FormField__Button mr-20">Signup</button><a href="/login"
                           className="FormField__Link">I am already a member</a>
                        </div>
   
                     </form>
                  </div>
               </div>
            </div>
         );
      } else {
         return (
            <LogIn />
         );
      }
   }
}
export default SignUp