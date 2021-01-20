import React from "react";
import "./../styles.css";
import { Carousel } from "react-bootstrap";
import slide01 from "./../images/slide03.jpg";
import slide02 from "./../images/slide05.jpg";
import slide03 from "./../images/slide06.jpg";

function Header() {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={slide01}
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue mollis
							interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={slide02}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={slide03}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl
							consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
		// <header className="container">
		// 	<div
		// 		id="carouselExampleFade"
		// 		className="carousel slide carousel-fade"
		// 		data-bs-ride="carousel"
		// 	>
		// 		<div className="carousel-inner">
		// 			<div class="carousel-item active">
		// 				<img src={slide01} class="d-block w-100" alt="..." />
		// 				<div class="carousel-caption d-none d-md-block">
		// 					<h5>First slide label</h5>
		// 					<p>
		// 						Nulla vitae elit libero, a pharetra augue mollis
		// 						interdum.
		// 					</p>
		// 				</div>
		// 			</div>
		// 			<div class="carousel-item">
		// 				<img src={slide02} class="d-block w-100" alt="..." />
		// 				<div class="carousel-caption d-none d-md-block">
		// 					<h5>Second slide label</h5>
		// 					<p>
		// 						Lorem ipsum dolor sit amet, consectetur
		// 						adipiscing elit.
		// 					</p>
		// 				</div>
		// 			</div>
		// 			<div class="carousel-item">
		// 				<img src={slide03} class="d-block w-100" alt="..." />
		// 				<div class="carousel-caption d-none d-md-block">
		// 					<h5>Third slide label</h5>
		// 					<p>
		// 						Praesent commodo cursus magna, vel scelerisque
		// 						nisl consectetur.
		// 					</p>
		// 				</div>
		// 			</div>
		// 		</div>
		// 		<a
		// 			className="carousel-control-prev"
		// 			href="#carouselExampleFade"
		// 			role="button"
		// 			data-bs-slide="prev"
		// 		>
		// 			<span
		// 				className="carousel-control-prev-icon"
		// 				aria-hidden="true"
		// 			></span>
		// 			<span className="visually-hidden">Previous</span>
		// 		</a>
		// 		<a
		// 			className="carousel-control-next"
		// 			href="#carouselExampleFade"
		// 			role="button"
		// 			data-bs-slide="next"
		// 		>
		// 			<span
		// 				className="carousel-control-next-icon"
		// 				aria-hidden="true"
		// 			></span>
		// 			<span className="visually-hidden">Next</span>
		// 		</a>
		// 	</div>
		// </header>
	);
}

export default Header;
