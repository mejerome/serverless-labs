import React from "react";
import Header from "./../components/home/Header";
import Hero from "./../components/home/Hero";
import Image from "./../components/img/ian-schneider-TamMbr4okv4-unsplash.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const About = () => {
	return (
		<motion.div
			initial="out"
			animate="in"
			exit="out"
			transition={transition}
			variants={animationOne}
		>
			<Header />
			<Hero
				image={Image}
				title="Move fast and connect deeper"
				desc="Digital has the power to connect the
                unconnected, and drives humans to expect the
                unexpected in all we do."
			/>
		</motion.div>
	);
};

export default About;
