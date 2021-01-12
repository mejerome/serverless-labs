import React from "react";
import cloudImg from "./images/cloud-service-19_404.png";
import consultImg from "./images/executive-3461933_1920-1024x683.jpg";

function Midpage() {
	return (
		<div className="container">
			<div class="how-section1">
				<div>
					<br />
					<br />
					<br />
					<br />
				</div>
				<div class="row">
					<div class="col-md-6 how-img">
						<img
							src={cloudImg}
							class="rounded-circle img-fluid"
							alt=""
						/>
					</div>
					<div class="col-md-6">
						<h3>Embracing the latest in Cloud Services</h3>
						{/* <h4 class="subheading">
							GetLance is a great place to find more clients, and
							to run and grow your own freelance business.
						</h4> */}
						<h5 class="text-muted">
							Businesses are in need of highly skilled people,
							infrastructure as well as the flexibility to build
							high-quality applications to simplify complex
							business processes to succeed in disruption for
							growth. To survive in today’s digital edge,
							organizations are required to leverage new
							technologies such as DevOps, Agile, microservices,
							containers, Agile and platform-as-a-service to
							deploy modern practices that contain provisioning,
							automated testing, and deployment.
						</h5>
					</div>
				</div>
				<div>
					<br />
					<br />
				</div>
				<div class="row">
					<div class="col-md-6">
						<h3>Developing the future</h3>
						{/* <h4 class="subheading">
							GetLance makes it easy to connect with clients and
							begin doing great work.
						</h4> */}
						<h5 class="text-muted">
							Syslog seamlessly integrates into your business
							workflow whether you are looking to create a new
							application, or need help with upgrades, development
							and QA of your existing systems. We provide teams
							capable of increasing the velocity of your
							development and extending your technical capability
							to exploit the latest technologies.
						</h5>
					</div>
					<div class="col-md-6 how-img">
						<img
							src={consultImg}
							class="rounded-square img-fluid"
							alt=""
						/>
					</div>
				</div>
				<div class="row"></div>
			</div>
		</div>
	);
}

export default Midpage;
