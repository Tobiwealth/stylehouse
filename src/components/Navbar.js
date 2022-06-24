import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

	const [click,setClick] = useState(false);

	const handleClick = () => setClick(!click); 
	const closeMobile = () => setClick(false);

	return(
		<>
			<nav className= 'navbar'>
				<div className= 'nav-container'>
			   	    <div className='menu-icon' onClick= {handleClick} >
			   	    	<i className='fa fa-bars'></i>
			   	    </div>
			   	    <div className= {click? "nav-menu active" : "nav-menu"}>
				   	    <ul className='nav-link-con'>
				   	    	<li className='nav-item'>
				   	    	    <Link to='/' className='nav-link'>Home</Link>
				   	    	</li>
				   	    	<li className='nav-item'>
				   	    	    <Link to='new-arrivals' className='nav-link'>New Arrivals</Link>
				   	    	</li>
				   	    	<li className='nav-item'>
				   	    	    <Link to='shop' className='nav-link'>Shop</Link>
				   	    	</li>
				   	    	<li className='nav-item'>
				   	    	    <Link to='account' className='nav-link'>Account</Link>
				   	    	</li>
				   	    	<li className='nav-item hide'>
				   	    	    <Link to='blog' className='nav-link'>Blog</Link>
				   	    	</li>
				   	    	<li className='nav-item hide'> 
				   	    	    <Link to='login' className='nav-link'>Login/Register</Link>
				   	    	</li>
				   	    	<li className='menu-out hide' onClick={closeMobile} >
				   	    	    <i className='fa fa-times'></i>
				   	        </li>	
				   	    </ul>
				   	    <div className='nav-btn-con'>
			   	    	    <Link to='blog' className='nav-btn'>
			   	    	    	<button className='blog-btn btn'>Blog</button>
			   	    	    </Link>
			   	    	    <Link to='login' className='nav-btn'>
			   	    	        <button className='login-btn btn'>Login/Register</button>
			   	    	    </Link>
			   	        </div>
			   	    </div>
			   	    <div className='cart-con'>
				   	    <Link to='cart' className='cart-link' >
				   	        <i className='cart-logo'><img src="https://res.cloudinary.com/df7ovxux0/image/upload/v1656086108/Shop/Cart_bcwyeg.png" alt="cart"/></i>
				   	    </Link>
				   	</div>
				</div>
		    </nav>
		</>
	);
}

export default Navbar;