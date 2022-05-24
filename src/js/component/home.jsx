import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Card from "./card.jsx";
import NewCard from "./NewCard.jsx";
import Footer from "./footer.jsx";

const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<div class="container">
				<div class="row row-cols-1 row-cols-md-4 g-4">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
