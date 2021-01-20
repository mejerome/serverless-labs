import React from "react";
import { NavLink } from "react-router-dom";
import syslogLogo from "./images/small_logo.png";

function Navbar() {
	return (
		<div className="container-fluid">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
					<NavLink to="/">
						<img src={syslogLogo} alt="logo" height="50" />
					</NavLink>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#collapsibleNavbar"
					aria-controls="navbarTogglerDemo01"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="collapsibleNavbar"
				>
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
	);
}

export default Navbar;
