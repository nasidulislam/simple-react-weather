import React from 'react';

const CarouselItem = (props) => {
	return(
		<div className="carousel-item-container">
			<div className="carousel-item-top-content">{props.topContent}</div>
			<div className="carousel-item-bottom-content">{props.bottomContent}</div>
		</div>
	)
};

export default CarouselItem;