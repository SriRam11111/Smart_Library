import React from 'react';
// import Register from './registration';
import './signin.css'
/**
 * page to sign into the website
 * @returns 
 */
function Sign_in() {
  return (
    <>

      <div class="login-body"><h1>Login</h1>
        <form class="form-signin">
          <div class="row">
            <label for="name">University Id:</label>
            <input type="number" name="number" autocomplete="off" placeholder="N09XXXX" />
          </div>
          <div class="row">
            <label for="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button type="submit">Login</button>
          <p class="mb-0  text-center">Don't have an account? <a href={"#"}>Sign
            Up</a></p>
          <p class="mb-0  text-center">Forgot Password? <a href="forget_password.html">Clich Here</a></p>
        </form>
      </div>
    </>
  )
}

export default Sign_in