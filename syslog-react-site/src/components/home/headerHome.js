import React from "react";
import "./../styles.css";
import { Carousel } from "react-bootstrap";
import slide01 from "./../img/pexels-christina-morillo-1181354.jpg";
import slide02 from "./../img/pexels-charles-wundengba-4212955.jpg";
import slide03 from "./../img/pexels-cottonbro-5054208.jpg";
import slide04 from "./../img/pexels-omotayo-tajudeen-3213283.jpg";

function Header() {
	return (
		<div>
			<Carousel fade>
				<Carousel.Item interval={3000}>
					<img
						className="img-fluid"
						src={slide01}
						alt="First slide"
					/>
					<Carousel.Caption>
						<div className="text-block ">
							<h3>
								Bringing together technology, culture and value
							</h3>
							<p>
								Syslog Solution is committed to helping
								enterprises get ready for the coming digital
								change. Businesses are faced with the
								transformation of legacy while keeping pace with
								digital, data, voice and soon AI.
							</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img
						className="d-block w-100"
						src={slide02}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<div className="text-block">
							<h3>Move fast and connect deeper</h3>
							<p>
								Digital has the power to connect the
								unconnected, and drives humans to expect the
								unexpected in all we do. Your business is built
								on the experiences you provide and the
								connections you foster. As the leading digital
								consultancy, we will help you move faster,
								engage smarter, and connect deeper with your
								customers to grow your business.
							</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img
						className="d-block w-100"
						src={slide03}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<div className="text-block">
							<h3> Improved IT service Delivery </h3>
							<p>
								Our DevOps approach helps to develop & deploy
								high-quality software products and services.
								Providing better resource management & Devops
								management plans with re-using option & low-cost
								implementation.
							</p>
							<ul className="text-left">
								<li>Instant scaling up of servers</li>
								<li>No more mismatch of server states</li>
								<li>Real-time deployments with no downtime</li>
								<li>Drastically improve consistency</li>
							</ul>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={3000}>
					<img
						className="d-block w-100"
						src={slide04}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<div className="text-block">
							<h3>Intercepting Banking Experiences</h3>
							<p>
								Together with our partner Bank-Genie we create
								technology that intercepts traditional banking
								processes and transforms them into experiences
								to make things easier, better and faster.
								Because, great experiences have the power to
								inspire, make emotional connections, build
								loyalty, and drive commerce.
							</p>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Header;
