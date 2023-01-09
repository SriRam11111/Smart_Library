import React from 'react';
import { BrowserRouter as Router, Routes, Route ,NavLink} from 'react-router-dom';
import './navbar.css'
import {Home,Register,Sign_in,Contact,About,Branches,
	Cse,Civil,Eee,Chemical,Ece,Mechanical,Librarian_login,Librarian_navbar,Library_add} from './index'



/**
 * navbar to show everytime divided as a seperate element
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
								to="/librarian_login"
								activeClassName="active"
								className="nav-links"
								onClick={click ? handleClick : null}
							>
								Librarian_login
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
					<Routes>
						<Route exact path="/" element={<Home/>} />
						<Route path="/register" element={<Register/>} />
						<Route path="/sign-in" element={<Sign_in/>} />
						<Route path="/contact" element={<Contact/>} />
						<Route path="/about" element={<About/>} />
						<Route path="/branches" element={<Branches/>} />
						<Route path="/civil" element={<Civil/>} />
						<Route path="/mech" element={<Mechanical/>} />
						<Route path="/cse" element={<Cse/>} />
						<Route path="/eee" element={<Eee/>} />
						<Route path="/chem" element={<Chemical/>} />
						<Route path="/ece" element={<Ece/>} />
						<Route path="/librarian_login" element={<Librarian_login/>} />
						<Route path="/library_add" element={<Library_add/>} />
						<Route path="/librarian_navbar" element={<Librarian_navbar/>} />
					</Routes>
				</div>
			</Router>
		</>
	)
}

export default NavBar;