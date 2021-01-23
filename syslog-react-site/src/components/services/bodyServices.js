import React from "react";
import "./services.css";
import cloudImg from "./../images/cloud-computing-2001090_1920.jpeg";
import codeImg from "./../img/heylagostechie-kwzWjTnDPLk-unsplash.jpg";

function BodyServices() {
	return (
		<div>
			<div className="container services text-center">
				<hr className="featurette-divider" />
				<div className="row text-justify">
					<div className="col-lg-4">
						<img
							src={cloudImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h3>Cloud services</h3>
						<p>
							Cloud computing promises lower capital investment
							and predictable operating expenditure with increased
							infrastructure flexibility. We have the skills and
							experience to ensure that your migration from
							existing applications is smooth and hassle-free.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
					<div className="col-lg-4">
						<img
							src={codeImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h3>App & web dev</h3>
						<p>
							We help companies to cut IT costs dramatically
							improving efficiency and productivity by building
							customizable solutions that are designed
							specifically for your organization. Each solution is
							designed the way you require it,
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
					<div className="col-lg-4">
						<img
							src={codeImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h3>Cyber security</h3>
						<p>
							Services include Security Audits, Penetration
							Testing, Web Application Security, SCADA and Managed
							Security Services. Protect data stored online/cloud
							infrastructure such as AWS, Azure, Enterprise File
							Sharing Solution.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
				</div>
				<hr className="featurette-divider" />

				<div className="row text-justify">
					<div className="col-lg-4">
						<img
							src={cloudImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h3>Datacenter transformation</h3>
						<p>
							We offer reliable end-to-end IT Remote
							Infrastructure Management Services to automate your
							own IT Infrastructure with today’s needs &
							tomorrow’s readiness.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
					<div className="col-lg-4">
						<img
							src={cloudImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h3>IT consultancy</h3>
						<p>
							Before you spend money on your critical IT
							infrastructure project, whether it’s a server
							upgrade, network overhaul, office setup, or cloud
							migration, consider Syslog Solution as your trusted
							partner.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
					<div className="col-lg-4">
						<img
							src={cloudImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h3>Financial Inclusion</h3>
						<p>
							Bank Genie our partner, creates technology that
							intercepts traditional banking processes and
							transforms them into experiences to make things
							easier, better and faster. Products are:
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BodyServices;
