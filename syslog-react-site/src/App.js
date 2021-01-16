import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import { Route } from "react-router-dom";
import "./components/styles.css";

function App() {
	return (
		<div className="">
			<Navbar />
			<body>
				<Route path="/" exact>
					<Home />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/services">
					<Services />
				</Route>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/blog">
					<Blog />
				</Route>
			</body>
		</div>
	);
}

export default App;
