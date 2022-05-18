import React from "react";

const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-dark bg-secondary position-realitve">
			<div class="container-fluid ">
				<a class="navbar-brand" href="#">
					<strong>Start Bootstrap</strong>
				</a>
				<div>
					<div class=" navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a
									class="nav-link active"
									aria-current="page"
									href="#">
									<strong>Home</strong>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									About
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Services
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
