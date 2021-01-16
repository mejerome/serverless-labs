import React from "react";
import threeSixty from "./images/360marketing.png";
import logo from "./images/small_logo.png";

function bodyHome() {
	return (
		<div className="container">
			<div className="row featurette">
				<div className="col-md-7">
					<h4 className="featurette-heading">
						Cloud Services,{" "}
						<span className="text-muted">Systems & Networks.</span>
					</h4>
					<p className="lead">
						Businesses are in need of highly skilled people,
						infrastructure as well as the flexibility to build
						high-quality applications to simplify complex business
						processes to succeed in disruption for growth. To
						survive in today’s digital edge, organizations are
						required to leverage new technologies such as DevOps,
						Agile, microservices, containers, Agile and
						platform-as-a-service to deploy modern practices that
						contain provisioning, automated testing, and deployment.
					</p>
				</div>
				<div className="col-md-5">
					<svg
						className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
						width="500"
						height="500"
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						aria-label="Placeholder: 500x500"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
					>
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#eee" />
						<text x="50%" y="50%" fill="#aaa" dy=".3em">
							500x500
						</text>
					</svg>
				</div>
			</div>

			<hr className="featurette-divider" />

			<div className="row featurette">
				<div className="col-md-7 order-md-2">
					<h4 className="featurette-heading">
						Oh yeah, it’s that good.{" "}
						<span className="text-muted">See for yourself.</span>
					</h4>
					<p className="lead">
						We help businesses and enterprises to leverage the full
						potential of cloud native capabilities to achieve
						maximum speed, Agility, and DevOps efficiency to embrace
						the real advantages of cloud-native environments.
					</p>
				</div>
				<div className="col-md-5 order-md-1">
					<svg
						className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
						width="500"
						height="500"
						xmlns="http://www.w3.org/2000/svg"
						role="img"
						aria-label="Placeholder: 500x500"
						preserveAspectRatio="xMidYMid slice"
						focusable="false"
					>
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#eee" />
						<text x="50%" y="50%" fill="#aaa" dy=".3em">
							500x500
						</text>
					</svg>
				</div>
			</div>

			<hr className="featurette-divider" />
			<div>
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
			</div>
			<hr className="featurette-divider" />

			<div>
				<div className="row">
					<div className="col-md-8">
						<div id="map"></div>
					</div>
					<div className="col">
						<div className="card">
							<img
								src={logo}
								className="card-img-top"
								id="map-logo"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Address:</h5>
								<p className="card-text">
									House 7 City Enclave, Brick Cl Plant Pool
									Road, Abelemkpe Accra GA, Ghana
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default bodyHome;
