import React from "react";
import Header from "./Carousel";
import BodyHome from "./bodyHome";
import Navbar from "./../Navbar";
import "./../styles.css";
import { motion } from "framer-motion";
import { animationThree, transition } from "../../animations";
import Footer from "../footer";

function Home() {
	return (
		<motion.div
			initial="out"
			exit="out"
			animate="in"
			transition={transition}
			variants={animationThree}
		>
			<Navbar />
			<Header />
			<BodyHome />
			<Footer />
		</motion.div>
	);
}

export default Home;
