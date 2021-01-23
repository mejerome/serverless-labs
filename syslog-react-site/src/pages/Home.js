import React from "react";
import Header from "./../components/home/Header";
import BodyHome from "./../components/home/bodyHome";
import Hero from "./../components/home/Hero";
import Image from "./../components/img/pexels-panumas-nikhomkhai-1148820.jpg";
import { motion } from "framer-motion";
import { animationOne, transition } from "../animations";

const Home = () => {
	return (
		<motion.div
			initial="out"
			animate="in"
			exit="out"
			variants={animationOne}
			transition={transition}
		>
			<Header />
			<Hero
				image={Image}
				title="Bringing together technology, culture and value"
				desc="Syslog Solution is committed to helping
								enterprises get ready for the coming digital
								change."
			/>
			<BodyHome />
		</motion.div>
	);
};

export default Home;
