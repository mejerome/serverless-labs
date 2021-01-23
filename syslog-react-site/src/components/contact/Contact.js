import React from "react";
import Header from "../Header";
import BodyContact from "./bodyContact";
import Navbar from "./../Navbar";
import Image from "./../img/pexels-pixabay-356056.png";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animations";
import styled from "styled-components";

const Spacer = styled.div`
	padding-bottom: 15px;
`;

function Contact() {
	return (
		<motion.div
			initial="out"
			exit="out"
			animate="in"
			transition={transition}
			variants={animationOne}
		>
			<Navbar />
			<Spacer />
			<Header
				title="Reach out to us."
				text="Want to get in touch? We'd love to hear from you. Here is how to reach us:"
				img={Image}
			/>
			<BodyContact />
		</motion.div>
	);
}

export default Contact;
