import React from 'react'
import './library_add.css'
function Library_add() {
      return (
        <div className="form">
          <div className="header">
            <h1>Welcome!</h1>
            <p>Please provide your information below.</p>
          </div>
          <div className="inputcontainer">
            {/* Below are the text fields that record the user's information. Each uses the onChange event handler, and sets the user input value to the component's state in real time using e.target.value    */}
            <div><input filter="[^a-zA-Z ]" name="firstName" placeholder="First Name"     /></div>
            <div><input filter="[^a-zA-Z ]" name="lastName" placeholder="Last Name"     /></div>
            <div><input filter="[^0-9]" maxLength="10" name="phone" placeholder="Phone Number"     /></div>
            <div><input placeholder="Email Address" onChange={(e) => {this.setState({email:e.target.value})}} /></div>
            
            {/* Below is the submit button. Using the onClick event handler, it changes the value of this.state.display to false, which would trigger the ternary in the render method to display the user's info instead of this form*/}
            <button >Submit</button>
          </div>
        </div>
      );
}

export default Library_add