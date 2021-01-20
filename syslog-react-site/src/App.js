import React from "react";
import Navbar from "./components/Navbar2";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles.css";

function App() {
	return (
		<div className="">
			<Navbar />
			<body>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
				<Route path="/services" component={Services} />
				<Route path="/contact" component={Contact} />
				<Route path="/blog" component={Blog} />
			</body>
		</div>
	);
}

export default App;
