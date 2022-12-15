import React from 'react';
import { useState } from "react";
import { Redirect } from 'react-router-dom';
import './signin.css'
/**
 * page to sign into the website
 * @returns 
 */
function Librarian_login() {

  const [uid, setUid] = useState("")
  const [password, setPassword] = useState("")
  const [loginSucessful, setLoginSucessful] = useState(false)

  const handleInput = (event) => {
    switch (event.target.name) {
      case "uid":
        setUid(event.target.value)
        console.log("handle input")
        break;
      case "password":
        setPassword(event.target.value)
        break;

      default:
      // code block
    }
  }
  if (loginSucessful) {
    return <Redirect to="/branches" />
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Submit Clicked ra bhai and value of uid is ${uid}`)
    console.log(`Submit Clicked ra bhai and value of password is ${password}`)
    setLoginSucessful(true)
    // setformErrors(validatename(username, email, password, repeatPassword))
    event.preventDefault()
  }


  return (
    <>

      <div className="login-body"><h1>Librarian Portal - login</h1>
        <form className="form-signin">
          <div className="row">
            <label htmlFor="name">University Id:</label>
            <input type="text" id="uid" name="uid" placeholder="N09XXXX" onChange={handleInput} />
          </div>
          <div className="row">
            <label htmlFor="password">Password</label>
            <input type="password" id="name" name="password" onChange={handleInput} />
          </div>
          <button type="submit" onClick={handleSubmit}>Login</button>
          <p className="mb-0  text-center">Don't have an account? <a href="/" value={"any"}>Sign
            Up</a></p>
          <p className="mb-0  text-center">Forgot Password? <a href="forget_password.html">Clich Here</a></p>
        </form>
      </div>
    </>
  )
}

export default Librarian_login