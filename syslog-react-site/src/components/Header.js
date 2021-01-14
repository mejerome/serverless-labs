import React from "react";
import "./styles.css";

function Header() {
	return (
		<header class="bg-primary py-5 mb-5">
			<div class="container h-100">
				<div class="row h-100 align-items-center">
					<div class="col-lg-12">
						<h1 class="display-4 text-white mt-5 mb-2">
							Business Name or Tagline
						</h1>
						<p class="lead mb-5 text-white-50">
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Non possimus ab labore provident mollitia. Id
							assumenda voluptate earum corporis facere quibusdam
							quisquam iste ipsa cumque unde nisi, totam quas
							ipsam.
						</p>
					</div>
				</div>
			</div>
			<div class="card text-white bg-secondary my-5 py-4 text-center">
				<div class="card-body">
					<p class="text-white m-0">
						This call to action card is a great place to showcase
						some important information or display a clever tagline!
					</p>
				</div>
			</div>
		</header>
	);
}

export default Header;
