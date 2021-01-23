import React from "react";
import threeSixty from "./../images/360marketing.png";
import btlAfrica from "./../images/btlafrica.png";
import cosmos from "./../images/cosmo.png";
import equity from "./../images/equity2-300x251.jpeg";
import matha from "./../images/mathacapita.png";
import national from "./../images/nationaltheater.png";
import wembley from "./../images/wembley.png";
import cloudIll from "./../img/Black Man _ Black Woman Using Laptop D.svg";
import dudeIll from "./../img/Two Black Men Using Laptop.svg";
import galIll from "./../img/Black Men Office Video Chat.svg";
import styled from "styled-components";

import { Row, Col, Image } from "react-bootstrap";

const FImage = styled.img`
	width: auto;
	height: auto;
`;

const Featurette = styled.div`
	display: flex;
	flex-wrap: wrap;
	text-align: center h3 {
		font-size: 2vmax;
		font-family: "Cabin", sans-serif;
	}
	p {
		font-size: 1rem;
		font-weight: normal;
		text-align: justify;
		font-family: "Roboto Slab", serif;
	}
`;

const Clients = styled.div`
	padding: 40px;
	font-size: 1rem;
	p {
		text-align: center;
	}
`;

function bodyHome() {
	return (
		<body>
			<div className="container">
				<hr className="featurette-divider" />
				<Featurette>
					<div className="col-md-7 pt-5 position-relative">
						<h3 className="featurette-heading">
							Cloud Services,
							<span className="text-muted">
								{"   "}
								Systems & Networks.
							</span>
						</h3>
						<p>
							Businesses are in need of highly skilled people,
							infrastructure as well as the flexibility to build
							high-quality applications to simplify complex
							business processes to succeed in disruption for
							growth. Organizations have to leverage new
							technologies such as DevOps, Agile, microservices,
							containers, Agile and platform-as-a-service to
							deploy modern practices that contain provisioning,
							automated testing, and deployment.
						</p>
					</div>
					<div className="col-md-5">
						<FImage src={cloudIll} alt=".." className="img-fluid" />
					</div>
				</Featurette>

				<hr className="featurette-divider" />

				<Featurette>
					<div className="col-md-6 order-md-2 pt-5">
						<h3 className="featurette-heading">
							It’s that good.{" "}
							<span className="text-muted">
								See for yourself.
							</span>
						</h3>
						<p>
							We help businesses and enterprises to leverage the
							full potential of cloud native capabilities to
							achieve maximum speed, Agility, and DevOps
							efficiency to embrace the real advantages of
							cloud-native environments. We translate ideas and
							dreams into practical solutions that work hard for
							your business. Our team of Professional Services
							Consultants and Project Managers are on hand to
							transform your operations into a productive,
							collaborative and agile environment.
						</p>
					</div>

					<div className="col-md-6 order-md-1">
						<FImage src={dudeIll} alt=".." className="img-fluid" />
					</div>
				</Featurette>

				<hr className="featurette-divider" />
				<Featurette>
					<div className="col-md-7 pt-5 position-relative">
						<h3 className="featurette-heading">
							Work from anywhere,
							<span className="text-muted">
								{"   "}
								Leave it to us.
							</span>
						</h3>
						<p>
							Collaboration is crucial for every part of a small
							business. From deciding what products or services to
							sell to providing support to customers, without
							communication between teams and departments, it’s
							impossible to get anywhere. We provide solutions
							that are budget-conscious, mobile, and adaptable.
							Collaboration is arguably even more essential now.
						</p>
					</div>
					<div className="col-md-5">
						<FImage src={galIll} alt=".." className="img-fluid" />
					</div>
				</Featurette>
				<hr className="featurette-divider" />

				<br />
				<Clients>
					<h1 className="text-center">Our Clients</h1>
					<p>
						A true partnership is a two-way street — ideas and
						information flow openly and regularly, based on a
						foundation of mutual trust and respect for one another’s
						expertise — and our clients embrace this philosophy. The
						best and most productive relationships are synergistic
						and goal-oriented, and a long-term relationship has the
						value add of deep-rooted industry and company knowledge
						and relationships.
					</p>
				</Clients>

				<Row>
					<Col>
						<Image src={threeSixty} rounded height={120} />
					</Col>
					<Col>
						<Image src={matha} rounded height={120} />
					</Col>
					<Col>
						<Image src={equity} rounded height={120} />
					</Col>{" "}
					<Col>
						<Image src={national} rounded height={120} />
					</Col>
					<Col>
						<Image src={cosmos} rounded height={120} />
					</Col>
					<Col>
						<Image src={btlAfrica} rounded height={120} />
					</Col>
					<Col>
						<Image src={wembley} rounded height={120} />
					</Col>
				</Row>

				<hr className="featurette-divider" />
			</div>
		</body>
	);
}

export default bodyHome;
