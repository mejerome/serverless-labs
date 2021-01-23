import React from "react";
import styled from "styled-components";
import mainLogo from "./images/small_logo.png";
import { Link } from "react-router-dom";

const Navbar = styled.nav`
	height: 60px;
	background: white;
	padding: 0rem calc((100vw - 1300px) / 2);
	display: flex;
	justify-content: space-between;
	align-text: center;
`;
const Logo = styled(Link)`
	color: white;
	padding-left: 1rem;
	text-decoration: none;
	font-size: 1.5rem;
`;
const NavItems = styled.div``;

const NavbarLink = styled(Link)``;

const MainHeader = () => {
	return (
		<Navbar>
			<Logo to="/">Syslog Solution</Logo>
			<NavItems>
				<NavbarLink exact to="/">
					<img src={mainLogo} alt="..." />
				</NavbarLink>
				<NavbarLink to="/about">About</NavbarLink>
				<NavbarLink to="/services">Services</NavbarLink>
				<NavbarLink to="/contact">Contact</NavbarLink>
			</NavItems>
		</Navbar>
	);
};

export default MainHeader;
