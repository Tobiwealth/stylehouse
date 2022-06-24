import React from 'react';
import './Card.css';

function Card() {
	return(
		<div className='card'>
			<h1>Shop our Zayden Collection</h1>
			<div className='photo-cards'>
				<div>
				    <img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1655857830/Shop/Rectangle_2_wpshqm.png" alt="cards" />
				    <p >xxxxxxx</p>
				    <div className='paint'><p>N XX,XXX</p></div>
				</div>
				<div>
				    <img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1655857830/Shop/Rectangle_3_yzuxzj.png" alt="cards" />
				    <p>xxxxxxx</p>
				    <div className='paint'><p>N XX,XXX</p></div>
				</div>
				<div>
				    <img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1655857830/Shop/Rectangle_6_uuxgrt.png" alt="cards" />
				    <p>xxxxxxx</p>
				    <div className='paint'><p>N XX,XXX</p></div>
				</div>
				<div>
				    <img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1655857829/Shop/Rectangle_7_nvgiuq.png" alt="cards" />
				    <p>xxxxxxx</p>
				    <div className='paint'><p>N XX,XXX</p></div>
				</div>
			</div>
			<h2>Why people choose us</h2>
			<div className='foot-wrap'>
				<div className='element-wrap one'>
					<div className='img-wrapper'>
						<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1655858863/Shop/Vector_dzysdq.png" alt="alt" />
						<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1655858863/Shop/Vector_3_ogauph.png" alt="alt" />
					</div>
					<h3>Shipping and delivery</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<div className='element-wrap'>
					<div>
						<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1655858863/Shop/Vector_1_rjztmm.png" alt="alt" />
					</div>
					<h3>Affordable</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem!</p>
				</div>
				<div className='element-wrap'>
					<div>
						<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1655858863/Shop/Vector_2_e7sahc.png" alt="alt" />
					</div>
					<h3>Creative dresses</h3>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, exercitationem!</p>
				</div>
			</div>
		</div>                   
	);
}

export default Card;