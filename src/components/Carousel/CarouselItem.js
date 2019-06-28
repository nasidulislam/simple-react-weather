import React from 'react';

// component imports
import WeatherIcon from 'react-icons-weather';

const CarouselItem = (props) => {
	return(
		<div className="carousel-item-container">
			<div className="carousel-item-top-content">{props.time}</div>
			<div className="carousel-item-bottom-content">
				<WeatherIcon
					name="owm"
					iconId={props.iconId}
					flip="horizontal"
					rotate="90"
					icon={props.icon}
				/>
				<div>{props.temp} °{props.tempUnit}</div>
			</div>
		</div>
	)
};

export default CarouselItem;