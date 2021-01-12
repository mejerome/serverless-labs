import React from "react";
import Carousel from "./Carousel";
import Midpage from "./Midpage";
import Clients from "./Clients";
import Map from "./Map";

function Home() {
	return (
		<div>
			<Carousel />
			<br />
			<Midpage />
			<br />
			<br />
			<Clients />
			<Map />
		</div>
	);
}

export default Home;
