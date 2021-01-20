import React from "react";
import threeSixty from "./../images/360marketing.png";
import btlAfrica from "./../images/btlafrica.png";
import cosmos from "./../images/cosmo.png";
import equity from "./../images/equity2-300x251.jpeg";
import matha from "./../images/mathacapita.png";
import national from "./../images/nationaltheater.png";
import wembley from "./../images/wembley.png";
import cloudIll from "./../img/undraw_dev_productivity_umsq.svg";
import dudeIll from "./../img/marginalia-767.png";
import "./../styles.css";

import { Row, Col, Image } from "react-bootstrap";

function bodyHome() {
	return (
		<div>
			<div className="container ">
				<hr className="featurette-divider" />

				<div className="row text-justify featurette">
					<div className="col-md-7 pt-5 position-relative">
						<h4 className="featurette-heading">
							Cloud Services,
							<span className="text-muted">
								{" "}
								Systems & Networks.
							</span>
						</h4>
						<p className="lead">
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
						<img
							src={cloudIll}
							alt=".."
							className="img-fluid p-2 mx-auto d-block"
						/>
					</div>
				</div>

				<hr className="featurette-divider" />

				<div className="row text-justify featurette">
					<div className="col-md-6 order-md-2 pt-5">
						<h4 className="featurette-heading">
							It’s that good.{" "}
							<span className="text-muted">
								See for yourself.
							</span>
						</h4>
						<p className="lead">
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
					<div className="col-md-1"></div>

					<div className="col-md-5 order-md-1">
						<img src={dudeIll} alt=".." className="img-fluid" />
					</div>
				</div>

				<hr className="featurette-divider" />
				<br />
				<h2 className="text-center" id="clients-header">
					Our Clients
				</h2>
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
		</div>
	);
}

export default bodyHome;
