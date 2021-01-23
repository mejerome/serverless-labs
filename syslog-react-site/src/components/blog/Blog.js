import React from "react";
import Navbar from "./../Navbar";
import { motion } from "framer-motion";
import { animationThree, transition } from "../../animations";

function Blog() {
	return (
		<motion.div
			initial="out"
			exit="out"
			animate="in"
			transition={transition}
			variants={animationThree}
		>
			<Navbar />
			<h1>Blog and news page...</h1>
		</motion.div>
	);
}

export default Blog;
