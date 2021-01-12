import React from "react";
import cosmos from "./images/cosmo.png";
import three60 from "./images/360marketing.png";
import btlafrica from "./images/btlafrica.png";
import equity from "./images/equity2-300x251.jpeg";
import national from "./images/nationaltheater.png";
import ImageScroller from "react-image-scroller";

function Clients() {
	return (
		<div className="container center">
			<h2 className="text-center">Our Client list</h2>
			<ImageScroller>
				<div className="slide">
					<img src={cosmos} alt="slide1" />
				</div>
				<div className="slide">
					<img src={three60} alt="slide2" />
				</div>
				<div className="slide">
					<img src={btlafrica} alt="slide3" />
				</div>
				<div className="slide">
					<img src={equity} alt="slide4" />
				</div>
				<div className="slide">
					<img src={national} alt="slide5" />
				</div>
			</ImageScroller>
		</div>
	);
}

export default Clients;
