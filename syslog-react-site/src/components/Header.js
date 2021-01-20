import React from "react";
import "./../components/about/about.css";

function headerAbout(props) {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid bg-dark">
				<div className="jumbotron-background">
					<img src={props.img} className="blur img-fluid" alt="..." />
				</div>

				<div className="container text-white">
					<h1 className="display-4">{props.title}</h1>
					<p className="lead mx-auto">{props.text}</p>
					<hr className="my-4" />

					<a
						className="btn btn-primary btn-lg"
						href="/"
						role="button"
					>
						Learn more
					</a>
				</div>
			</div>
		</div>
	);
}

export default headerAbout;
