import React from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Blog from "./components/blog/Blog";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/styles.css";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalStyles";

function App() {
	return (
		<div>
			<GlobalStyle />
			<AnimatePresence>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/about" component={About} />
					<Route path="/services" component={Services} />
					<Route path="/contact" component={Contact} />
					<Route path="/blog" component={Blog} />
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
