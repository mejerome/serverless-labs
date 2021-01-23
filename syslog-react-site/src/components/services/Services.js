import React from "react";
import Header from "../Header";
import BodyServices from "./bodyService";
import servicesImg from "./../img/kvistholt-photography-oZPwn40zCK4-unsplash.jpg";
import Navbar from "./../Navbar";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animations";
import styled from "styled-components";

const Spacer = styled.div`
	padding-bottom: 15px;
`;
function Services() {
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
				title="What we do"
				text="At a point when innovation is the best approach to differentiate and grow,
we assist you in building the capabilities required for your digital evolution.
We give you unbounded progress."
				img={servicesImg}
			/>
			<BodyServices />
		</motion.div>
	);
}

export default Services;
