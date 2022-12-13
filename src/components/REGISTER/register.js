import React from 'react';
import './register.css';
import { useState } from "react";
import PasswordsStrengthindicator from "./passwordindicator";

/**
 * 
 * @param {data} props data taken from app.js
 * @returns weather the registration is validate or not
 */
function Register(props) {


    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const [formError, setformErrors] = useState({})
    // const [passwordstrength,setPasswordstrength]=useState()

    const handleInput = (event) => {
        switch (event.target.name) {
            case "username":
                setUsername(event.target.value)
                break;
            case "email":
                setEmail(event.target.value)
                break;
            case "password1":
                setPassword(event.target.value)
                break;
            case "password2":
                setRepeatPassword(event.target.value)
                break;
            default:
            // code block
        }


    }
    const userregex = /^[A-Za-z][A-Za-z0-9_]{7,29}$/
    const emailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    // const passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    // const pass=/^[7,29]$/;
    const validatename = () => {
        const error = {}
        if (!username) {
            error.username = "username required"
        }
        else if (!userregex.test(username)) {
            error.username = "length should in 8-30 characters and contains aiphanumeric and (_) .must start with alphabet "
        }
        if (!email) {
            error.email = "email required"
        }
        else if (!emailregex.test(email)) {
            error.email = "enter valid email"
        }
        if (!password) {
            error.password = "password required"
        }
        error.password = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"

        if (!repeatPassword) {
            error.repeatPassword = "password required for validation"
        }
        else if (password !== repeatPassword) {
            error.repeatPassword = "password not matching"
        }
        return error
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(`Submit Clicked ra bhai and value of username is ${username}`)
        console.log(`Submit Clicked ra bhai and value of username is ${email}`)
        console.log(`Submit Clicked ra bhai and value of username is ${password}`)
        console.log(`Submit Clicked ra bhai and value of username is ${repeatPassword}`)
        console.log("event", username)
        setformErrors(validatename(username, email, password, repeatPassword))
        event.preventDefault()
    }
    return (
        <>
            <div className="container">
                <form action="thanks.html" id="form" className="form">
                    <h2>Register With Us</h2>
                    <div className="form-control">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" placeholder="Enter username" onChange={handleInput} />
                        <div className="errorcss">{formError.username}</div>
                    </div>

                    <div className="form-control">
                        <label htmlFor="uid">UniversityID</label>
                        <input type="text" id="uid" name="uid" placeholder="Enter Uid" onChange={handleInput} />
                        <div className="errorcss">{formError.Uid}</div>
                    </div>

                    <div className="form-control">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="Enter email address" onChange={handleInput} />
                        <div className="errorcss">{formError.email}</div>
                    </div>
                    <div className="form-control shadow-none">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password1" placeholder="Enter password" onChange={handleInput} />
                        <div className="errorcss mb-1">{formError.password}</div>
                        <PasswordsStrengthindicator password={password} />
                    </div>
                    <div className="form-control">
                        <label htmlFor="password-confirmation">Confirm Password</label>
                        <input type="password" id="password-confirmation" name="password2" placeholder="Enter password again" onChange={handleInput} />
                        <div className="errorcss">{formError.repeatPassword}</div>
                    </div>
                    <button type="submit" onClick={handleSubmit}>submit</button>
                </form>
            </div>
        </>

    )
}

export default Register;