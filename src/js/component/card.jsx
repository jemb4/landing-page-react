import React from "react";

import image from "./572-536x354.jpg";

const Card = () => {
	return (
		<div class="col">
			<div class="card h-100">
				<img src={image} class="card-img-top" alt="..." />
				<div class="card-body">
					<h5 class="card-title">Card title</h5>
					<p class="card-text">
						This is a longer card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
