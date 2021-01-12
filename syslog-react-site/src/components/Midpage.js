import React from "react";
import cloudImg from "./images/cloud-computing-2001090_1920.jpeg";

function Midpage() {
	return (
		<div className="container">
			<div class="how-section1">
				<div class="row">
					<div class="col-md-4 how-img">
						<img
							src={cloudImg}
							class="rounded-pill img-fluid"
							alt=""
							width="350"
						/>
					</div>
					<div class="col-md-8">
						<h4>Cloud Services, Systems & Networks</h4>
						{/* <h4 class="subheading">
							GetLance is a great place to find more clients, and
							to run and grow your own freelance business.
						</h4> */}
						<p class="text-muted">
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
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<h4>Get hired quickly</h4>
						<h4 class="subheading">
							GetLance makes it easy to connect with clients and
							begin doing great work.
						</h4>
						<p class="text-muted">
							Streamlined hiring. GetLance’s sophisticated
							algorithms highlight projects you’re a great fit
							for. Top Rated and Rising Talent programs. Enjoy
							higher visibility with the added status of
							prestigious programs. Do substantial work with top
							clients. GetLance pricing encourages freelancers to
							use GetLance for repeat relationships with their
							clients.
						</p>
					</div>
					<div class="col-md-6 how-img">
						<img
							src="https://image.ibb.co/cHgKnU/Work_Section2_freelance_img2.png"
							class="rounded-circle img-fluid"
							alt=""
						/>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6 how-img">
						<img
							src="https://image.ibb.co/ctSLu9/Work_Section2_freelance_img3.png"
							class="rounded-circle img-fluid"
							alt=""
						/>
					</div>
					<div class="col-md-6">
						<h4>Work efficiently, effectively.</h4>
						<h4 class="subheading">
							With GetLance, you have the freedom and flexibility
							to control when, where, and how you work. Each
							project includes an online workspace shared by you
							and your client, allowing you to:
						</h4>
						<p class="text-muted">
							Send and receive files. Deliver digital assets in a
							secure environment. Share feedback in real time. Use
							GetLance Messages to communicate via text, chat, or
							video. Use our mobile app. Many features can be
							accessed on your mobile phone when on the go.
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<h4>Get paid on time</h4>
						<h4 class="subheading">
							All projects include GetLance Payment Protection —
							helping ensure that you get paid for all work
							successfully completed through the freelancing
							website.
						</h4>
						<p class="text-muted">
							All invoices and payments happen through GetLance.
							Count on a simple and streamlined process. Hourly
							and fixed-price projects. For hourly work, submit
							timesheets through GetLance. For fixed-price jobs,
							set milestones and funds are released via GetLance
							escrow features. Multiple payment options. Choose a
							payment method that works best for you, from direct
							deposit or PayPal to wire transfer and more.
						</p>
					</div>
					<div class="col-md-6 how-img">
						<img
							src="https://image.ibb.co/gQ9iE9/Work_Section2_freelance_img4.png"
							class="rounded-circle img-fluid"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Midpage;
