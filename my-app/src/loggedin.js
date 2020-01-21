import React from 'react';
class LoggedIn extends React.Component {  

   constructor() {
      super();
      this.handleSubmit = this.handleSubmit.bind(this);
   }
   
   handleSubmit(e) {
      e.preventDefault();
      //redirecting to the login page
      let path = `./login`;
      this.props.history.push(path); 
   }

   render() {
      return(
         <div className="App">
            <div className="App__Form">
               <h1>Welcome!</h1>
            </div>
            
            <div className="App-header">
               <form onSubmit={this.handleSubmit}>
                  <button type="submit" className="FormField__Button mr-20">Logout</button>
               </form>
            </div>
         </div>
      );
   }
}
export default LoggedIn;