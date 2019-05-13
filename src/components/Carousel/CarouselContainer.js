import React from 'react';
import './Carousel.scss';

// component imports
import Slider from "react-slick";
import CarouselItem from './CarouselItem';

class Carousel extends React.Component {
	render() {
		return(
			<div className={"carousel " + this.props.containerClass}>
				<Slider { ...this.props.options}>
					{this.props.itemList.forEach((item) => {
						{/*<CarouselItem />*/}
						console.log(item)
					})}
				</Slider>
			</div>
		)
	}
}

export default Carousel;