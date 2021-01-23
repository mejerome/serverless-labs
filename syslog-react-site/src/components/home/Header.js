import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import mainLogo from "./../images/small_logo.png";

const Navbar = styled.nav({
	height: "60px",
	background: "transparent",
	display: "flex",
	alignItems: "center",
	padding: "0rem calc((100vw - 1300px) / 2)",
	fontSize: "1.5rem",
	justifyContent: "space-between",
});

const Logo = styled.a({
	paddingLeft: "1rem",
});

const NavItems = styled.div({});

const NavbarLink = styled(Link)({
	fontFamily: "Lato",
	color: "grey",
	textDecoration: "none",
	padding: "1rem",
});

const Header = () => {
	return (
		<>
			<Navbar>
				<Logo>
					<img src={mainLogo} alt=".." height="60px"></img>
				</Logo>
				<NavItems>
					<NavbarLink to="/" exact>
						Home
					</NavbarLink>
					<NavbarLink to="/about">About</NavbarLink>
					<NavbarLink to="/services">Services</NavbarLink>
					<NavbarLink to="/contact">Contact</NavbarLink>
				</NavItems>
			</Navbar>
		</>
	);
};

export default Header;
