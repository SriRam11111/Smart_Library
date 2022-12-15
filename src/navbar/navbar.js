import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './navbar.css'
import {Home,Register,Sign_in,Contact,About,Branches,
	Cse,Civil,Eee,Chemical,Ece,Mechanical} from './index'



/**
 * navbar to show everytime divided as a seperate component
 * @returns 
 */
function NavBarContent() {
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);

	return (
		<div>
			<div className={click ? "main-container" : ""} onClick={() => Close()} />
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
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}>
								Home
							</NavLink>
						</li>

						<li className="nav-item">
							<NavLink
								exact
								to="/register"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								register
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/sign-in"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								signin
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/contact"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Contact Us
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/about"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
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
 * nav function where rendering occcurs
 * @returns navbar that appears on the top of page
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
						<Route path="/branches" component={Branches} />
						<Route path="/civil" component={Civil} />
						<Route path="/mech" component={Mechanical} />
						<Route path="/cse" component={Cse} />
						<Route path="/eee" component={Eee} />
						<Route path="/chem" component={Chemical} />
						<Route path="/ece" component={Ece} />
					</Switch>
				</div>
			</Router>
		</>
	)
}

export default NavBar;