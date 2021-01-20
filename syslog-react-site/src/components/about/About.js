import React from "react";
import HeaderAbout from "./../Header";
import AboutBody from "./bodyAbout";
import image from "./../img/ian-schneider-TamMbr4okv4-unsplash.jpg";

function About() {
	return (
		<div className="">
			<HeaderAbout
				title="Who we are?"
				img={image}
				text="We translate ideas and dreams into practical solutions that work hard for your business. Our team of Professional Services Consultants and Project Managers are on hand to transform your workplace into a productive, collaborative and agile environment."
			/>
			<AboutBody />
		</div>
	);
}

export default About;
