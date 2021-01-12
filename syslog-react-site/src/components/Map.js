import React from "react";
import logoImg from "./images/small_logo.png";

function Map() {
	return (
		<div>
			<div class="row">
				<div class="col-8">
					<h5>Address and Contact information</h5>
					<img src={logoImg} alt="logo" height="50"></img>
				</div>
				<div class="col-4">col-8</div>
			</div>
		</div>
	);
}

export default Map;
