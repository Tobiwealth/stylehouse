import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
	return(
		<div className='footer-wrapper'>
			<div className='first-layer'>
				<div className='style'>
					<h4>The Style House</h4>
					<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam sequi itaque officiis vel nihil illo?</p>
				</div>
				<div className='links-wrap'>
					<h4>Links</h4>
					<ul>
						<li>
							<Link className='link' to='/'>Home</Link>
						</li>
						<li>
							<Link className='link' to='new-arrivals'>New Arrivals</Link>
						</li>
						<li>
							<Link className='link' to='shop'>Shop</Link>
						</li>
						<li>
							<Link className='link' to='account'>Account</Link>
						</li>
					</ul>
				</div>
				<div className='cate-wrap'>
					<h4>Categories</h4>
					<p><div>xxxxxxxx</div><div>xxxxxx</div><div>xxx</div></p>
				</div>
				<div className='contact-wrap'>
				    <h4>Contact</h4>
					<p>thetobiwealth@gmail.com</p>
				</div>
			</div>
			<div className='second-layer'>
				<p>Copyright &copy; 2022. All rights reserved.<p className='color set'> TheStyleHouse.com</p></p>
				<p className='color'>Site credit: Tobiwealth</p>
			</div>
		</div>
	);
}

export default Footer;