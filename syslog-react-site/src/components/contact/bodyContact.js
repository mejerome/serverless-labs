import React from "react";
import slide06 from "./../images/slide06.jpg";

function BodyContact() {
	return (
		<div className="container">
			<img src={slide06} className="img-fluid " alt=".." />
			<hr className="featurette-divider" />

			<div className="row">
				<div className="col-8">
					<div className="card">
						<div className="card-header bg-primary text-white">
							<i className="fa fa-envelope"></i> Contact us.
						</div>
						<div className="card-body">
							<form>
								<div className="form-group">
									<label for="name">Name</label>
									<input
										type="text"
										className="form-control"
										id="name"
										aria-describedby="emailHelp"
										placeholder="Enter name"
										required
									/>
								</div>
								<div className="form-group">
									<label for="email">Email address</label>
									<input
										type="email"
										className="form-control"
										id="email"
										aria-describedby="emailHelp"
										placeholder="Enter email"
										required
									/>
									<small
										id="emailHelp"
										className="form-text text-muted"
									>
										We'll never share your email with anyone
										else.
									</small>
								</div>
								<div className="form-group">
									<label for="message">Message</label>
									<textarea
										className="form-control"
										id="message"
										rows="6"
										required
									></textarea>
								</div>
								<br />
								<div className="mx-auto">
									<button
										type="submit"
										className="btn btn-primary text-right"
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="col-4 col-sm-4">
					<div className="card bg-light mb-3">
						<div className="card-header bg-success text-white text-uppercase">
							<i className="fa fa-home"></i> Address
						</div>
						<div className="card-body">
							<p>7 City Enclave, Brick Close</p>
							<p>Off Plantpool Road</p>
							<p>Abelemkpe, Accra</p>
							<p>Ghana</p>
							<p>
								Email :{"  "}
								<a href="mailto:info@sysloggh.com">
									info@sysloggh.com
								</a>
							</p>
							<p>
								General Inquiries:{" "}
								<a href="tel:+233277700001">
									+233 (0)277 700 001
								</a>
							</p>
							<p>
								Accounts Inquiries:{" "}
								<a href="tel:+233277555903">
									+233 (0)277 555 903
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BodyContact;
