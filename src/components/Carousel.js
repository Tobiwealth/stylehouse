import React, { useState } from 'react';
import './Carousel.css';
import { CarouselData } from './CarouselData';

function Carousel() {
	const [currImage, setCurrImage] = useState(0);
	return(
		<div className='carousel'>
			<div className='carousel-inner' style={{backgroundImage: `url(${CarouselData[currImage].url})`}}>
				<div className='left' onClick={()=> {currImage > 0 && setCurrImage(currImage-1)}} >
					<i className='fas fa-angle-left' style={{fontSize: 50}}>
					</i>
				</div>
				<div className='center'>
				</div>
				<div className='right' onClick={()=> {currImage < CarouselData.length - 1 && setCurrImage(currImage+1)}} >
					<i className='fas fa-angle-right' style={{fontSize: 50}}></i>
				</div>
			</div>
		</div>
	);
}

export default Carousel;