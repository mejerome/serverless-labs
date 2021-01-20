import React from "react";
import cloudImg from "./../images/cloud-computing-2001090_1920.jpeg";
import codeImg from "./../images/code-944499_1280-1024x550.jpg";
import slide07 from "./../images/slide07.jpg";

function BodyServices() {
	return (
		<div>
			<div className="container text-center">
				<img src={slide07} className="img-fluid " alt=".." />
				<hr className="featurette-divider" />
				<div className="row">
					<div className="col-lg-4">
						<img
							src={cloudImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h2>Heading</h2>
						<p>
							Donec sed odio dui. Etiam porta sem malesuada magna
							mollis euismod. Nullam id dolor id nibh ultricies
							vehicula ut id elit. Morbi leo risus, porta ac
							consectetur ac, vestibulum at eros. Praesent commodo
							cursus magna.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
					<div className="col-lg-4">
						<img
							src={codeImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h2>Heading</h2>
						<p>
							Duis mollis, est non commodo luctus, nisi erat
							porttitor ligula, eget lacinia odio sem nec elit.
							Cras mattis consectetur purus sit amet fermentum.
							Fusce dapibus, tellus ac cursus commodo, tortor
							mauris condimentum nibh.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
					<div className="col-lg-4">
						<img
							src={codeImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h2>Heading</h2>
						<p>
							Donec sed odio dui. Cras justo odio, dapibus ac
							facilisis in, egestas eget quam. Vestibulum id
							ligula porta felis euismod semper. Fusce dapibus,
							tellus ac cursus commodo, tortor mauris condimentum
							nibh, ut fermentum massa justo sit amet risus.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4">
						<img
							src={cloudImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h2>Heading</h2>
						<p>
							Donec sed odio dui. Etiam porta sem malesuada magna
							mollis euismod. Nullam id dolor id nibh ultricies
							vehicula ut id elit. Morbi leo risus, porta ac
							consectetur ac, vestibulum at eros. Praesent commodo
							cursus magna.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
					<div className="col-lg-4">
						<img
							src={cloudImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h2>Heading</h2>
						<p>
							Duis mollis, est non commodo luctus, nisi erat
							porttitor ligula, eget lacinia odio sem nec elit.
							Cras mattis consectetur purus sit amet fermentum.
							Fusce dapibus, tellus ac cursus commodo, tortor
							mauris condimentum nibh.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
					<div className="col-lg-4">
						<img
							src={cloudImg}
							alt="..."
							height="200"
							className="rounded"
						/>

						<h2>Heading</h2>
						<p>
							Donec sed odio dui. Cras justo odio, dapibus ac
							facilisis in, egestas eget quam. Vestibulum id
							ligula porta felis euismod semper. Fusce dapibus,
							tellus ac cursus commodo, tortor mauris condimentum
							nibh, ut fermentum massa justo sit amet risus.
						</p>
						<p>
							<a
								className="btn btn-secondary"
								href="/"
								role="button"
							>
								View details &raquo;
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BodyServices;
