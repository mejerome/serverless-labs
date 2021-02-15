import React from "react";
import teamImg from "./../img/Group of Black Millennials at Office.svg";
import compImg from "./../img/Black Man Working on Analytics.svg";
import styled from "styled-components";
import wahabImg from "./../img/wahab-img.jpg";
import jeromeImg from "./../img/jerome-img.jpg";

const Intro = styled.div`
	h1 {
		font-family: "Cabin", sans-serif;
		font-size: 2rem;
		text-align: left;
		color: grey;
	}

	p {
		font-family: "Roboto Slab", serif;
	}
`;

const Values = styled.div`
	h2 {
		font-family: "Cabin", sans-serif;
		padding-top: 30px;
	}
	h5 {
		font-family: "Roboto Slab", serif;
		text-align: left;
		color: grey;
		font-weight: normal;
	}
	p {
		font-family: "Roboto", sans-serif;
		font-size: 1rem;
	}
`;

const Team = styled.div`
	padding: 40px;
	font-size: 1vmax;
	p {
		text-align: center;
	}
`;

function bodyAbout() {
	return (
		<div>
			<div id="about" className="container text-justify">
				<hr className="featurette-divider" />
				<div className="row align-middle">
					<Intro className="col-sm-8">
						<br />
						<br />
						<br />
						<h1>Syslog Solution Limited</h1>
						<p>
							Syslog Solution is a highly innovative technology
							services provider, established to provide leading
							edge intelligent solutions and consulting services
							to small & medium sized businesses, organizations
							and government institutions.
						</p>
						<p>
							We assist in ensuring high availability and
							scalability of mission critical systems, so that
							your IT ecosystem can support and grow with your
							operations.
						</p>
						<br />
						<a className="btn btn-secondary" href="/about">
							Get in touch
						</a>
					</Intro>
					<div className="col-sm-4">
						<img src={teamImg} alt="..." className="img-fluid" />
					</div>
				</div>{" "}
				<hr className="featurette-divider" />
			</div>
			<Values className="container bg-grey">
				<div className="row">
					<div className="col-sm-5">
						<img src={compImg} alt="..." className="img-fluid" />
					</div>
					<div className="col-sm-7 company-inf">
						<h2>Our Values</h2>
						<br />
						<h5>
							<strong>MISSION:</strong>
							<br />
							<br />
							To become the world’s preferred IT Solutions company
							– applying insight, service quality and innovation
							to optimize business and societal growth, utilizing
							technology.
						</h5>
						<br />
						<p>
							<strong>VISION:</strong>
							<br />
							<ul>
								<li>
									<p>
										To be our customers’ obvious choice by
										providing cost-effective IT solutions
										through innovative and reliable
										services.
									</p>
								</li>
								<li>
									<p>
										To grow in a steady and responsible pace
										to a position of strength and prominence
										in IT solutions through.
									</p>
								</li>
								<li>
									<p>
										To provide our customers with business
										value by leveraging technology solutions
										to meet their unique challenges in
										today’s ever-changing environment.
									</p>
								</li>
							</ul>
						</p>
					</div>
				</div>
			</Values>
			<div className="bg-light team py-5">
				<div className="container py-5">
					<div className="row mb-4">
						<div className="col text-center">
							<h2 className="display-4 font-weight-light">
								Our team
							</h2>
							<p>
								Customer-centricity is at the core of everything
								we do. Our flat leadership structure maximizes
								transparency and agility while minimizing
								deployment time for new ideas. Meet the team
								that powers business growth at Nous by inspiring
								innovation, customer success, and trust.
							</p>
						</div>
					</div>

					<Team className="row text-center">
						<div className="col-xl-3 col-sm-6 mb-5">
							<div className="bg-white rounded shadow-sm py-5 px-4">
								<img
									src={jeromeImg}
									alt=""
									width="100"
									className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
								/>
								<h5 className="mb-0">Jerome Tabiri</h5>
								<span className="small text-uppercase text-muted">
									CEO - Founder
								</span>
								<ul className="social mb-0 list-inline mt-3">
									<li className="list-inline-item">
										<a
											href="https://www.facebook.com/jtabiri/"
											className="social-link"
											target="_blank"
											rel="noreferrer"
										>
											<i className="fa fa-facebook-f"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a
											href="https://twitter.com/mejerome19"
											className="social-link"
											target="_blank" rel="noreferrer"
										>
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a
											href="https://www.instagram.com/mejerome"
											className="social-link"
											target="_blank" rel="noreferrer"
										>
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a
											href="https://www.linkedin.com/in/jtabiri"
											className="social-link"
											target="_blank" rel="noreferrer"
										>
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 mb-5">
							<div className="bg-white rounded shadow-sm py-5 px-4">
								<img
									src={wahabImg}
									alt=""
									width="100"
									className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
								/>
								<h5 className="mb-0">Abdul Wahab</h5>
								<span className="small text-uppercase text-muted">
									COO - Founder
								</span>
								<ul className="social mb-0 list-inline mt-3">
									<li className="list-inline-item">
										<a
											href="/"
											className="social-link"
											target="_blank" rel="noreferrer"
										>
											<i className="fa fa-facebook-f"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a
											href="https://twitter.com/atetse"
											className="social-link"
											target="_blank" rel="noreferrer"
										>
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a
											href="/"
											className="social-link"
											target="_blank" rel="noreferrer"
										>
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a
											href="https://www.linkedin.com/in/abdul-wahab-daud-b1912118"
											className="social-link"
											target="_blank" rel="noreferrer"
										>
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-sm-6 mb-5">
							<div className="bg-white rounded shadow-sm py-5 px-4">
								<img
									src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-2_f8dowd.png"
									alt=""
									width="100"
									className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
								/>
								<h5 className="mb-0">Theodore Tabiri</h5>
								<span className="small text-uppercase text-muted">
									CTO - Consultant
								</span>
								<ul className="social mb-0 list-inline mt-3">
									<li className="list-inline-item">
										<a href="/" className="social-link">
											<i className="fa fa-facebook-f"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="/" className="social-link">
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="/" className="social-link">
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="/" className="social-link">
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>

						<div className="col-xl-3 col-sm-6 mb-5">
							<div className="bg-white rounded shadow-sm py-5 px-4">
								<img
									src="https://res.cloudinary.com/mhmd/image/upload/v1556834133/avatar-1_s02nlg.png"
									alt=""
									width="100"
									className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
								/>
								<h5 className="mb-0">Ibrahim Jibrilu</h5>
								<span className="small text-uppercase text-muted">
									Network Lead
								</span>
								<ul className="social mb-0 list-inline mt-3">
									<li className="list-inline-item">
										<a href="/" className="social-link">
											<i className="fa fa-facebook-f"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="/" className="social-link">
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="/" className="social-link">
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li className="list-inline-item">
										<a href="/" className="social-link">
											<i className="fa fa-linkedin"></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</Team>
				</div>
			</div>
		</div>
	);
}

export default bodyAbout;
