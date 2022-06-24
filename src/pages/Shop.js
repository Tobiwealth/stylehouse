import React from 'react';
import './Shop.css';

function Shop() {
	return(
		<div className='shop-wrapper'>
			<div className='item-wrapper'>
				<div className='item-1'>
					<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1655857830/Shop/Rectangle_2_wpshqm.png" alt="pic" />
					<p>XXXXXX</p>
					<p className='shade'>N,XXX</p>
					<button className='shop-btn'>Add to cart</button>
				</div>
				<div className='item-2'>
					<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1655857830/Shop/Rectangle_3_yzuxzj.png" alt="pic" />
					<p>XXXXXX</p>
					<p className='shade'>N,XXX</p>
					<button className='shop-btn'>Add to cart</button>
				</div>
			</div>
		</div>
	);
}

export default Shop;