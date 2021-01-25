import React from "react";
import "./services.css";
// import { Button, Modal } from "react-bootstrap";

function BodyServices() {
	// const [modalShow, setModalShow] = React.useState(false);
	return (
		<div>
			<section className="section services-section" id="services">
				<div className="container">
					<div className="row">
						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<div className="icon">
									<i className="fas fa-cloud"></i>
								</div>
								<div className="feature-content">
									<h5>Cloud computing</h5>
									<p>
										Cloud computing promises lower capital
										investment and predictable operating
										expenditure with increased
										infrastructure flexibility.
									</p>
									<p>
										We have the skills and experience to
										ensure that your migration from existing
										applications is smooth and hassle-free.
										Business Owners need to recognize that
										infrastructure not only needs regular
										upkeep but also creative ways to improve
										and excel.
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<div className="icon">
									<i class="fa fa-file-code"></i>{" "}
								</div>
								<div className="feature-content">
									<h5>App & web dev</h5>
									<p>
										We help companies to cut IT costs
										dramatically improving efficiency and
										productivity by building customizable
										solutions that are designed specifically
										for your organization.
									</p>
									<p>
										Each solution is designed the way you
										require it, rather than you changing
										your business process around existing
										applications. We have extensive
										experience in CRM, POS, Sales Force
										Management, and Helpdesk
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<div className="icon">
									<i class="fas fa-shield-alt"></i>
								</div>
								<div className="feature-content">
									<h5>Cyber Security</h5>
									<p>
										Services include Security Audits,
										Penetration Testing, Web Application
										Security, SCADA and Managed Security
										Services.
									</p>
									<p>
										Protect data stored online/cloud
										infrastructure such as AWS, Azure,
										Enterprise File Sharing Solution. We can
										provide you with a comprehensive range
										of cyber security services to help you
										stay secure and, at the same time, help
										you demonstrate compliance with industry
										and regulatory standards.
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<div className="icon">
									<i class="fas fa-server"></i>
								</div>
								<div className="feature-content">
									<h5>Datacenter automation</h5>
									<p>
										We offer reliable end-to-end IT Remote
										Infrastructure Management Services to
										automate your own IT Infrastructure with
										today’s needs & tomorrow’s readiness.
									</p>
									<p>
										Our suggestions are designed to
										proactively eliminate issues in IT
										Infrastructure and provide best-in-class
										IT infrastructure. Lighten your load
										with managed services and shrink your
										footprint by embracing the cloud.
										Inefficiencies weigh down your ability
										to support the business. Lighten your
										load with managed services and shrink
										your footprint by embracing the cloud.
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<div className="icon">
									<i class="fas fa-hands-helping"></i>
								</div>
								<div className="feature-content">
									<h5>IT consultancy</h5>
									<p>
										Before you spend money on your critical
										IT infrastructure project, whether it’s
										a server upgrade, network overhaul,
										office setup, or cloud migration,
										consider Syslog Solution as your trusted
										partner.
									</p>
									<p>
										Syslog’s clients know that to disrupt
										markets and grow faster than the
										competition, the design, delivery and
										ongoing maintenance of ‘made to measure’
										operational software is key. Syslog
										designs software around organisations’
										unique processes and creates the point
										of difference that customers and
										investors crave.
									</p>
								</div>
							</div>
						</div>
						<div className="col-sm-6 col-lg-4">
							<div className="feature-box-1">
								<div className="icon">
									<i class="far fa-credit-card"></i>
								</div>
								<div className="feature-content">
									<h5>Financial Inclusion</h5>
									<p>
										Bank Genie our partner, creates
										technology that intercepts traditional
										banking processes and transforms them
										into experiences to make things easier,
										better and faster. Some products are:
									</p>
									<ul>
										<li>Genie-Onboard</li>
										<li>Genie-Branch</li>
										<li>Genie-Q</li>
										<li>Genie-Mobile</li>
										<li>Genie-Bot</li>
										<li>Genie-Wallet</li>
										<li>Genie Mobi-Cheque</li>
										<li>Banqin Core Banking</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

// function CloudModal(props) {
// 	return (
// 		<Modal {...props} size="lg" aria-labelledby="modal-title" centered>
// 			<Modal.Header closeButton>
// 				<Modal.Title id="modal-title">Cloud Computing</Modal.Title>
// 			</Modal.Header>
// 		</Modal>
// 	);
// }

export default BodyServices;
