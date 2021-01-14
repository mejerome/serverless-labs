import React from "react";
import { Link } from "react-router-dom";

import syslogLogo from "./images/small_logo.png";

function Navbar() {
	return (
		<div>
			<nav class="navbar navbar-light navbar-expand-lg bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="/">
						<img src={syslogLogo} alt="" height="50" />
					</a>
					<ul class="nav justify-content-end">
						<li class="nav-item">
							<a
								class="nav-link active"
								aria-current="page"
								href="/"
							>
								<Link to="/">Home</Link>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								<Link to="/about">About us</Link>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								<Link to="/services">Our services</Link>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								<Link to="/contact">Contact us</Link>
							</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="/">
								<Link to="/blog">Blog & news</Link>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
