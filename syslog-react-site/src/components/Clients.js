import React from "react";
import cosmos from "./images/cosmo.png";
import three60 from "./images/360marketing.png";
import btlafrica from "./images/btlafrica.png";
import equity from "./images/equity2-300x251.jpeg";
import national from "./images/nationaltheater.png";
import matha from "./images/mathacapita.png";

function Clients() {
	return (
		<div class="container">
			<h2>Our Partners/ Our Clients</h2>
			<section class="customer-logos justify-content-md-center slider">
				<div class="slide">
					<img src={cosmos} alt="slide" />
				</div>
				<div class="slide">
					<img src={three60} alt="slide" />
				</div>
				<div class="slide">
					<img src={btlafrica} alt="slide" />
				</div>
				<div class="slide">
					<img src={equity} alt="slide" />
				</div>
				<div class="slide">
					<img src={national} alt="slide" />
				</div>
				<div class="slide">
					<img src={matha} alt="slide" />
				</div>
			</section>
		</div>
	);
}

export default Clients;
