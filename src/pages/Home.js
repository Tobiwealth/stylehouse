import React from 'react';
import Herosection from '../components/Herosection';
import Carousel from '../components/Carousel';
import Card from '../components/Card';
import Footer from '../components/Footer';




function Home() {
	return(
		<div>
		    <Herosection/>
		    <Carousel />
		    <Card />
		    <Footer />

		</div>
	);
}

export default Home;