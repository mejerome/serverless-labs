import React from "react";
import { NavLink } from "react-router-dom";
import syslogLogo from "./images/small_logo.png";
import "./../components/styles.css";
import styled from "styled-components";

const NavItems = styled.div`
	text-decoration: none;
	color: black;
	font-family: "Roboto", sans-serif;
	display: flex;
	a {
		color: grey;
	}
	a:hover {
		color: black;
	}
`;

function Navbar() {
	return (
		<div className="container">
			<nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
				<a className="navbar-brand" href="/">
					<NavLink to="/">
						<img src={syslogLogo} alt="logo" height="60" />
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
				<NavItems
					className="collapse navbar-collapse"
					id="collapsibleNavbar"
				>
					<ul className="navbar-nav mx-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">
								<NavLink to="/">HOME</NavLink>
							</a>
						</li>
						<li className="nav-item active">
							<a className="nav-link" href="/">
								<NavLink to="/about">ABOUT</NavLink>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								<NavLink to="/services">SERVICES</NavLink>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/">
								<NavLink to="/contact">CONTACT</NavLink>
							</a>
						</li>
					</ul>
					{/* <ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="/">
								<NavLink to="/blog">BLOG & NEWS</NavLink>
							</a>
						</li>
					</ul> */}
				</NavItems>
			</nav>
		</div>
	);
}

export default Navbar;
