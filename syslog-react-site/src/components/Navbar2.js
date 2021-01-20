import React from "react";
import { NavLink } from "react-router-dom";
import syslogLogo from "./images/small_logo.png";

function Navbar() {
	return (
		<div className="container">
			<div id="app" className="container">
				<nav className="navbar navbar-expand-md navbar-light bg-light">
					<a className="navbar-brand" href="/">
						<NavLink to="/">
							<img src={syslogLogo} alt="logo" height="50" />
						</NavLink>
					</a>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav mx-auto">
							<li className="nav-item active">
								<a className="nav-link" href="/">
									<NavLink to="/about">About</NavLink>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									<NavLink to="/services">Services</NavLink>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/">
									<NavLink to="/contact">Contact</NavLink>
								</a>
							</li>
						</ul>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link" href="/">
									<NavLink to="/blog">Blog and News</NavLink>
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	);
}

export default Navbar;
