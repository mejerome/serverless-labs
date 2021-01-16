import React from "react";
import Header from "./headerHome";
import BodyHome from "./bodyHome";
import "./styles.css";

function Home() {
	return (
		<div>
			<Header />
			<hr className="featurette-divider" />
			<BodyHome />
		</div>
	);
}

export default Home;
