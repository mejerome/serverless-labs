import React from "react";
import "./footer.css";

const Footer = () => {
	return (
		<div>
			<div className="footer-dark">
				<footer>
					<div className="container">
						<div className="row">
							<div className="col-md-3 item">
								<h3>Services</h3>
								<ul>
									<li>
										<a href="/services">Cloud computing</a>
									</li>
									<li>
										<a href="/services">
											App & web development
										</a>
									</li>
									<li>
										<a href="/services">Cyber security</a>
									</li>
								</ul>
							</div>
							<div className="col-md-3 item">
								<h3>Services</h3>
								<ul>
									<li>
										<a href="/services">
											Datacenter automation
										</a>
									</li>
									<li>
										<a href="/services">IT consultancy</a>
									</li>
									<li>
										<a href="/services">
											Financial inclusion
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-3 item">
								<h3>About</h3>
								<ul>
									<li>
										<a href="/about">Company</a>
									</li>
									<li>
										<a href="/about">Team</a>
									</li>
									<li></li>
								</ul>
							</div>
						</div>
						<div className="row">
							<div className="col item p-5 social">
								<a
									href="https://www.facebook.com/Sysloggh-103607251268036"
									target="_blank" rel="noreferrer"
								>
									<i className="fa fa-facebook"></i>
								</a>
								<a href="https://twitter.com/sysloggh">
									<i className="fa fa-twitter"></i>
								</a>

								{/* <a href="/">
									<i className="fa fa-instagram"></i>
								</a> */}
								<a href="https://www.linkedin.com/in/syslog-gh-4010091a4/">
									<i className="fa fa-linkedin"></i>
								</a>
							</div>
						</div>
					</div>
					<p className="copyright">Syslog Solution Limited © 2020</p>
				</footer>
			</div>
		</div>
	);
};

export default Footer;
