import React from "react";
// import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const IFrame = styled.iframe``;
const Map = styled.div`
	display: flex;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	align
`;

function BodyContact() {
	return (
		<div class="container bootstrap snippets bootdeys">
			<hr className="featurette-divider" />

			<div class="row text-center">
				<div class="col-sm-4">
					<div class="contact-detail-box">
						<i class="fa fa-th fa-3x text-colored"></i>
						<h4>Get In Touch</h4>
						<abbr title="Phone">P:</abbr>{" "}
						<a href="tel:+233277500001">(233) 277-700001</a>
						<br />
						<abbr title="Phone">P:</abbr>{" "}
						<a href="tel:+233277555903">(233) 277-555903</a>
						<br />
						E:{" "}
						<a href="mailto:info@sysloggh.com" class="text-muted">
							info@sysloggh.com
						</a>
					</div>
				</div>

				<div class="col-sm-4">
					<div class="contact-detail-box">
						<i class="fa fa-map-marker fa-3x text-colored"></i>
						<h4>Our Location</h4>

						<address>
							7 City Enclave, Brick Close,
							<br />
							Abelemkpe, Accra Ghana
							<br />
						</address>
					</div>
				</div>

				<div class="col-sm-4">
					<div class="contact-detail-box">
						<i class="fa fa-book fa-3x text-colored"></i>
						<h4>24x7 Support</h4>

						<p>We are always here for you.</p>
						<h4 class="text-muted">
							<a
								href="mailto:support@sysloggh.com"
								class="text-muted"
							>
								support@sysloggh.com
							</a>
						</h4>
					</div>
				</div>
			</div>
			<hr className="featurette-divider" />
			<div class="col">
				<Map class="contact-map">
					<IFrame
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9444.137627376173!2d-0.21056675759986493!3d5.600849847010152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b38911a84f3%3A0xb1e7f2b6930d2516!2sSyslog%20Solution%20Limited!5e0!3m2!1sen!2suk!4v1611484257862!5m2!1sen!2suk"
						width="1100"
						height="400"
						frameborder="0"
						aria-hidden="false"
						tabindex="0"
					></IFrame>
				</Map>
			</div>
			{/* 
				<div class="col-sm-6">
					<Form>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group controlId="formGridAddress1">
							<Form.Label>Phone Number</Form.Label>
							<Form.Control placeholder="+233 000000000" />
						</Form.Group>

						<Form.Group controlId="exampleForm.ControlTextarea1">
							<Form.Label>Message</Form.Label>
							<Form.Control as="textarea" rows={3} />
						</Form.Group>

						<Button variant="primary" type="submit">
							Submit
						</Button>
					</Form>
				</div> */}
		</div>
	);
}

export default BodyContact;
