import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div class="container-fluid row">
				<Card class="col-3" />
				<Card class="col-3" />
				<Card class="col-3" />
				<Card class="col-3" />
			</div>
			<Footer />
		</>
	);
};

export default Home;
