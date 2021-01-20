import React from "react";
import slide01 from "./images/carousel1-1024x534.png";
import slide02 from "./images/electronics-2791673_1920-1024x683.jpg";
import slide03 from "./images/building-856441_1920-1024x683.jpg";
import "./styles.css";

function Carousel() {
	return (
		<header>
			<div
				id="carouselExampleCaptions"
				class="carousel slide carousel-fade"
				data-bs-ride="carousel"
			>
				<ol class="carousel-indicators">
					<li
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="0"
						class="active"
					></li>
					<li
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="1"
					></li>
					<li
						data-bs-target="#carouselExampleCaptions"
						data-bs-slide-to="2"
					></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img
							src={slide01}
							class="d-block w-100"
							alt="slide01"
							height="300"
						/>
						<div class="carousel-caption d-none d-md-block">
							<h1>Welcome to Syslog Solution Limited</h1>
						</div>
					</div>
					<div class="carousel-item">
						<img
							src={slide02}
							class="d-block w-100"
							alt="slide02"
							height="300"
						/>
						<div class="carousel-caption d-none d-md-block">
							<h3>
								We pride ourselves in staying abreast with the
								latest technologies.
							</h3>
						</div>
					</div>
					<div class="carousel-item">
						<img
							src={slide03}
							class="d-block w-100"
							alt="slide03"
							height="300"
						/>
						<div class="carousel-caption d-none d-md-block">
							<h5>
								Our DevOps approach to implementation deploys
								highly available, cost effective, secure and
								efficient systems to meet the business needs and
								budget of our clients.
							</h5>
						</div>
					</div>
				</div>
				<a
					class="carousel-control-prev"
					href="#carouselExampleCaptions"
					role="button"
					data-bs-slide="prev"
				>
					<span
						class="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span class="visually-hidden">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#carouselExampleCaptions"
					role="button"
					data-bs-slide="next"
				>
					<span
						class="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span class="visually-hidden">Next</span>
				</a>
			</div>
		</header>
	);
}

export default Carousel;
