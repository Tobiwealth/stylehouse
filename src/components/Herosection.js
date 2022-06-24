import React from 'react';
import './Herosection.css';
import { Link } from 'react-router-dom';

function Herosection () {
	return(
		<div>
			<div className='hero-wrapper'>
			    <div className='hero'>
				    <div className='logo-wrapper'>
					    <img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656086095/Shop/logo1_yshtig.png" alt="Logo" className='hero-logo' />
					    <input type="search" name="search1" placeholder='search' className="search" />
				    </div>
				    <div className='hero-word-con'>
					    <div className='word-con'>
					    	<h1 className='w1'>Better</h1>
					    	<h1 className='w2'>When it's </h1>
					    	<h1 className='w3'>on you</h1>
					    </div>
					    <Link to='/shop' className='button-wrapper'>
					    	<button>Start Shopping<i className='fas fa-arrow-right'></i></button>
					    </Link>
					    <div className='word'>
					    	<p>The <div>SKC COLLECTION</div> <div>N XX, XXX</div></p>
					    </div>
				    </div>
				</div>
				<div className='image-wrapper'>
					<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656086097/Shop/unsplash_vozspf.png" alt="Hero" />
				</div>
			</div>
			<div className='section-wrapper'>
				<h1 className='sec-word-wrapper'>
					<div>Book your</div>
					<div>style</div>
					<div>sessions.</div>
				</h1>
				<div className='sectwo'>
					<ul className='sec-list'>
						<li>Birthdays</li>
						<li>Runway styles</li>
						<li>runway styles</li>
						<li>official shoots</li>
					</ul>
					<p>and many more shoots.</p>
					<button className='sec-btn'>Create Schedule<i className='fas fa-arrow-right'></i></button>
				</div>
		    </div>
		</div>
	);
}

export default Herosection;