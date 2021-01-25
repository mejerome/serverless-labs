import React from "react";
import HeaderAbout from "./../Header";
import AboutBody from "./bodyAbout";
import image from "./../img/ian-schneider-TamMbr4okv4-unsplash.jpg";
import Navbar from "./../Navbar";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animations";
import styled from "styled-components";
import Footer from "./../footer";

const Spacer = styled.div`
	padding-bottom: 15px;
`;

function About() {
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
			<HeaderAbout
				title="Who we are?"
				img={image}
				text="We translate ideas and dreams into practical solutions that work hard for your business. Our team of Professional Services Consultants and Project Managers are on hand to transform your workplace into a productive, collaborative and agile environment."
			/>
			<AboutBody />
			<Footer />
		</motion.div>
	);
}

export default About;
