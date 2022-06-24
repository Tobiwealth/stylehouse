import React from 'react';
import './Shop.css';

function Cart() {
	return(
		<div className='cart-wrapper'>
		    <div className='cart-contain'>
		    	<img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656032047/Shop/Empty-bro_1_lm3y79.png" alt="Cart" />
		    	<h2>No item in your cart yet</h2>
		    	<button>Start Shopping<i className='fas fa-arrow-right'></i></button>
		    </div>
		</div>
	);
}

export default Cart;