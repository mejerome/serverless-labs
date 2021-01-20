import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";
import syslogLogo from "./images/small_logo.png";
import { Nav, Navbar } from "react-bootstrap";

function Navbar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">
				<img src={syslogLogo} alt=".." height="50" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#features">About</Nav.Link>
					<Nav.Link href="#pricing">Service</Nav.Link>
					<Nav.Link href="#pricing">Contact</Nav.Link>
				</Nav>
				<Nav>
					<Nav.Link href="#deets">More deets</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		// <div className="container">
		// 	<nav className="navbar navbar-default">
		// 		<div className="container">
		// 			<div className="nav-header">
		// 				<button
		// 					type="button"
		// 					className="navbar-toggle collapsed"
		// 					data-toggle="collapse"
		// 					data-target="#navbar-collapse-1"
		// 				>
		// 					<span className="sr-only">Toggle navigation</span>
		// 					<span className="icon-bar"></span>
		// 					<span className="icon-bar"></span>
		// 					<span className="icon-bar"></span>
		// 				</button>
		// 			</div>
		// 			<a className="navbar-brand" href="/">
		// 				<NavLink to="/">
		// 					<img src={syslogLogo} alt="logo" height="50" />
		// 				</NavLink>
		// 			</a>
		// 			<div
		// 				className="collapse navbar-collapse"
		// 				id="navbar-collapse-1"
		// 			>
		// 				<ul className="nav navbar-nav navbar-right">
		// 					<li>
		// 						<a href="/">
		// 							About
		// 							{/* <NavLink to="/about">About</NavLink> */}
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a href="/">
		// 							<NavLink to="/services">Services</NavLink>
		// 						</a>
		// 					</li>
		// 					<li>
		// 						<a href="/">
		// 							<NavLink to="/contact">Contact</NavLink>
		// 						</a>
		// 					</li>
		// 				</ul>
		// 				<ul className="navbar-nav">
		// 					<li>
		// 						<a href="/">
		// 							<NavLink to="/blog">Blog and News</NavLink>
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</nav>
		// 	</div>
		// </div>
	);
}

export default Navbar;
