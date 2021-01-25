import React from "react";
import "./../styles.css";
import { Carousel } from "react-bootstrap";
import slide01 from "./../img/pexels-christina-morillo-1181354.jpg";
import slide02 from "./../img/pexels-charles-wundengba-4212955.jpg";
import slide03 from "./../img/pexels-cottonbro-5054208.jpg";
import slide04 from "./../img/pexels-omotayo-tajudeen-3213283.jpg";
import styled from "styled-components";

const Image = styled.img`
	-webkit-filter: brightness(50%);
	vertical-align: middle;
	height: auto;
	min-height: 300px;
	width: 100%;
	padding-top: 40px;
`;

const Text = styled.div`
	display: block;
	align-content: center;
	text-align: center;
	h3 {
		text-shadow: 1px 1px gold;
		text-align: right;
		align-item: center
		font-size: 3vmax;
		padding-bottom: 40px;
	}
	p,
	ul {
		font-size: 1.5vw;
		text-shadow: 1px 1px blue;
		text-align: left;
		font-weight: normal;
		font-family: "Roboto Slab", serif;
	}
`;

function Header() {
	return (
		<div className="container-fluid">
			<Carousel fade>
				<Carousel.Item interval={5000}>
					<Image src={slide01} alt="First slide" fluid />
					<Carousel.Caption>
						<Text>
							<h3>
								Bringing together technology, culture and value
							</h3>
							<p className="d-none d-sm-block">
								Syslog Solution is committed to helping
								enterprises get ready for the coming digital
								change. Businesses are faced with the
								transformation of legacy while keeping pace with
								digital, data, voice and soon AI.
							</p>
						</Text>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<Image src={slide02} alt="Third slide" fluid />

					<Carousel.Caption>
						<Text>
							<h3>Move fast and connect deeper</h3>
							<p className="d-none d-sm-block">
								Digital has the power to connect the
								unconnected, and drives humans to expect the
								unexpected in all we do. Your business is built
								on the experiences you provide and the
								connections you foster. As the leading digital
								consultancy, we will help you move faster,
								engage smarter, and connect deeper with your
								customers to grow your business.
							</p>
						</Text>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<Image src={slide03} alt="Third slide" fluid />

					<Carousel.Caption>
						<Text>
							<h3> Improved IT service Delivery </h3>
							<p className="d-none d-sm-block">
								Our DevOps approach helps to develop & deploy
								high-quality software products and services.
								Welcome to the new way:
							</p>
							<ul className="d-none d-sm-block">
								<li>Instant scaling up of servers</li>
								<li>Real-time deployments with no downtime</li>
								<li>Drastically improve consistency</li>
							</ul>
						</Text>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={5000}>
					<Image src={slide04} alt="Third slide" fluid />
					<Carousel.Caption>
						<Text>
							<h3>Intercepting Banking Experiences</h3>
							<p className="d-none d-sm-block">
								Together with our partner Bank-Genie we create
								technology that intercepts traditional banking
								processes and transforms them into experiences
								to make things easier, better and faster.
							</p>
						</Text>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default Header;
