import React from "react";

function headerAbout(props) {
	return (
		<div>
			<div>
				<div class="position-relative overflow-hidden text-center bg-light">
					<div class="col-md-5 mx-auto my-5">
						<h1 class="display-4 fw-normal">{props.title}</h1>
					</div>
					<div class="product-device shadow-sm d-none d-md-block"></div>
					<div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
				</div>
			</div>
		</div>
	);
}

export default headerAbout;
