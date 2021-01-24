import React from "react";
import { Form, Button } from "react-bootstrap";

function BodyContact() {
	return (
		<div class="container bootstrap snippets bootdeys">
			<hr className="featurette-divider" />

			<div class="row text-center">
				<div class="col-sm-4">
					<div class="contact-detail-box">
						<i class="fa fa-th fa-3x text-colored"></i>
						<h4>Get In Touch</h4>
						<abbr title="Phone">P:</abbr> (233) 277-700001
						<br />
						<abbr title="Phone">P:</abbr> (233) 277-555903
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

			<div class="row">
				<div class="col-sm-6">
					<div class="contact-map">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9444.137627376173!2d-0.21056675759986493!3d5.600849847010152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b38911a84f3%3A0xb1e7f2b6930d2516!2sSyslog%20Solution%20Limited!5e0!3m2!1sen!2suk!4v1611484257862!5m2!1sen!2suk"
							width="550"
							height="400"
							frameborder="0"
							aria-hidden="false"
							tabindex="0"
						></iframe>
						{/* <iframe
							src="https://www.google.com/maps/embed/v1/place?q=New+York+University&amp;key=AIzaSyBSFRN6WWGYwmFi498qXXsD2UwkbmD74v4"
							frameborder="0"
							scrolling="no"
							marginheight="0"
							marginwidth="0"
						></iframe> */}
					</div>
				</div>

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
					{/* <form
						role="form"
						name="ajax-form"
						id="ajax-form"
						action="https://formsubmit.io/send/coderthemes@gmail.com"
						method="post"
						class="form-main"
					>
						<div class="form-group">
							<label for="name2">Name</label>
							<input
								class="form-control"
								id="name2"
								name="name"
								onblur="if(this.value == '') this.value='Name'"
								onfocus="if(this.value == 'Name') this.value=''"
								type="text"
								value="Name"
							/>
							<div class="error" id="err-name">
								Please enter name
							</div>
						</div>

						<div class="form-group">
							<label for="email2">Email</label>
							<input
								class="form-control"
								id="email2"
								name="email"
								type="text"
								onfocus="if(this.value == 'E-mail') this.value='';"
								onblur="if(this.value == '') this.value='E-mail';"
								value="E-mail"
							/>
							<div class="error" id="err-emailvld">
								E-mail is not a valid format
							</div>
						</div>

						<div class="form-group">
							<label for="message2">Message</label>
							<textarea
								class="form-control"
								id="message2"
								name="message"
								rows="5"
								onblur="if(this.value == '') this.value='Message'"
								onfocus="if(this.value == 'Message') this.value=''"
							>
								Message
							</textarea>

							<div class="error" id="err-message">
								Please enter message
							</div>
						</div>

						<div class="row">
							<div class="col-xs-12">
								<div id="ajaxsuccess" class="text-success">
									E-mail was successfully sent.
								</div>
								<div class="error" id="err-form">
									There was a problem validating the form
									please check!
								</div>
								<div class="error" id="err-timedout">
									The connection to the server timed out!
								</div>
								<div class="error" id="err-state"></div>
								<button
									type="submit"
									class="btn btn-primary btn-shadow btn-rounded w-md"
									id="send"
								>
									Submit
								</button>
							</div>
						</div>
					</form> */}
				</div>
			</div>
		</div>
	);
}

export default BodyContact;
