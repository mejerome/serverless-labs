import React from "react";
import threeSixty from "./../images/360marketing.png";
import btlAfrica from "./../images/btlafrica.png";
import cosmos from "./../images/cosmo.png";
import equity from "./../images/equity2-300x251.jpeg";

import cloudIll from "./../img/undraw_dev_productivity_umsq.svg";
import dudeIll from "./../img/undraw_maintenance_cn7j.svg";

import { Row, Col, Image } from "react-bootstrap";

function bodyHome() {
	return (
		<div>
			<div className="container">
				<hr className="featurette-divider" />

				<div className="row text-justify featurette">
					<div className="col-md-7 pt-5">
						<h4 className="featurette-heading">
							Cloud Services,{" "}
							<span className="text-muted">
								Systems & Networks.
							</span>
						</h4>
						<p className="lead">
							Businesses are in need of highly skilled people,
							infrastructure as well as the flexibility to build
							high-quality applications to simplify complex
							business processes to succeed in disruption for
							growth. To survive in today’s digital edge,
							organizations are required to leverage new
							technologies such as DevOps, Agile, microservices,
							containers, Agile and platform-as-a-service to
							deploy modern practices that contain provisioning,
							automated testing, and deployment.
						</p>
					</div>
					<div className="col-md-5">
						<img src={cloudIll} alt=".." height={400} />
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row text-justify featurette">
					<div className="col-md-7 order-md-2 pt-5">
						<h4 className="featurette-heading">
							Oh yeah, it’s that good.{" "}
							<span className="text-muted">
								See for yourself.
							</span>
						</h4>
						<p className="lead">
							We help businesses and enterprises to leverage the
							full potential of cloud native capabilities to
							achieve maximum speed, Agility, and DevOps
							efficiency to embrace the real advantages of
							cloud-native environments.
						</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img src={dudeIll} alt=".." height={300} />
					</div>
				</div>

				<hr className="featurette-divider" />
				{/* <div>
				<div className="row">
					<div className="col">
						<div className="card">
							<img
								src={threeSixty}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body"></div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img
								src={threeSixty}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body"></div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img
								src={threeSixty}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body"></div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img
								src={threeSixty}
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body"></div>
						</div>
					</div>
				</div>
			</div> */}
				<Row>
					<Col>
						<Image src={threeSixty} rounded height={100} />
					</Col>
					<Col>
						<Image src={threeSixty} rounded height={100} />
					</Col>
					<Col>
						<Image src={threeSixty} rounded height={100} />
					</Col>{" "}
					<Col>
						<Image src={threeSixty} rounded height={100} />
					</Col>
					<Col>
						<Image src={threeSixty} rounded height={100} />
					</Col>
					<Col>
						<Image src={threeSixty} rounded height={100} />
					</Col>
				</Row>

				<hr className="featurette-divider" />
			</div>
		</div>
	);
}

export default bodyHome;
