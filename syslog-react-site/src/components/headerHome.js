import React from "react";
import "./styles.css";
import slide01 from "./images/slide03.jpg";
import slide02 from "./images/slide05.jpg";
import slide03 from "./images/slide06.jpg";

function Header() {
	return (
		// <header className="bg-dark mb-5 text-center header-img">
		// 	<div className="container-fluid h-100">
		// 		<div className="row h-100 align-items-center">
		// 			<div className="col-lg-12">
		// 				<h2 className="display-4 text-white mt-5 mb-2 title-h2">
		// 					Syslog Solution Limited{" "}
		// 				</h2>
		// 				<h5 className="text-white m-0">
		// 					Let us introduce your business to magical and
		// 					revolutionary IT technologies at unbelievable prices!
		// 				</h5>
		// 				<p className="lead mb-5 text-white-50">
		// 					We pride ourselves in staying abreast with the
		// 					latest technologies. Our DevOps approach to
		// 					implementation deploys highly available, cost
		// 					effective, secure and efficient systems to meet the
		// 					business needs and budget of our clients.
		// 				</p>
		// 			</div>
		// 		</div>
		// 	</div>
		// </header>
		<header>
			<div
				id="carouselExampleFade"
				className="carousel slide carousel-fade"
				data-bs-ride="carousel"
			>
				<div className="carousel-inner">
					<div class="carousel-item active">
						<img src={slide01} class="d-block w-100" alt="..." />
						<div class="carousel-caption d-none d-md-block">
							<h5>First slide label</h5>
							<p>
								Nulla vitae elit libero, a pharetra augue mollis
								interdum.
							</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src={slide02} class="d-block w-100" alt="..." />
						<div class="carousel-caption d-none d-md-block">
							<h5>Second slide label</h5>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
						</div>
					</div>
					<div class="carousel-item">
						<img src={slide03} class="d-block w-100" alt="..." />
						<div class="carousel-caption d-none d-md-block">
							<h5>Third slide label</h5>
							<p>
								Praesent commodo cursus magna, vel scelerisque
								nisl consectetur.
							</p>
						</div>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleFade"
					role="button"
					data-bs-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleFade"
					role="button"
					data-bs-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="visually-hidden">Next</span>
				</a>
			</div>
		</header>
	);
}

export default Header;
