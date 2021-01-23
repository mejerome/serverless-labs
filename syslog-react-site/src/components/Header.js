import React from "react";
import styled from "styled-components";

const Message = styled.div`
	h1 {
		font-family: "Acme", sans-serif;
		color: #191970;
		text-align: center;
		font-size: 3vmax;
	}
	p {
		font-family: "Roboto", sans-serif;
		font-size: 1rem;
	}
`;

function headerAbout(props) {
	return (
		<div>
			<div className="jumbotron jumbotron-fluid bg-dark">
				<div className="jumbotron-background">
					<img src={props.img} className="blur img-fluid" alt="..." />
				</div>

				<Message className="container">
					<h1>{props.title}</h1>
					<p>{props.text}</p>
					<hr className="my-4" />
				</Message>
			</div>
		</div>
	);
}

export default headerAbout;
