import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from '../components/homefolder/home';
import './navbar.css'
import Register from '../components/REGISTER/register';
import Sign_in from '../components/signin/sign_in';
import Contact from '../components/contactfolder/contact';
import About from '../components/aboutfolder/about';



/**
 * navbar to show everytime divided as a seperate component
 * @returns 
 */
function NavBarContent() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  // const Close = () => setClick(false);

  return (
    <div>

      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            SmartLibrary
            <i className="fa fa-code"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/register"
                className="nav-links"
              >
                register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sign-in"
                className="nav-links"
              >
                signin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                className="nav-links"
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                className="nav-links"
              >
                About
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}


/**
 * function where rendering occcurs
 * @returns 
 */
function NavBar() {
  return (

    <>
     
       <Router>
        <NavBarContent />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/sign-in" component={Sign_in} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default NavBar;