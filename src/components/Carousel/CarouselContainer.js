import React from 'react';
import './Carousel.scss';

// component imports
import Slider from "react-slick";
import CarouselItem from './CarouselItem';

// other imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import convertToTime from '../../core/js/helpers/convertToTime';

class Carousel extends React.Component {
	render() {
		const itemList = this.props.itemList;
		return(
			<div className={"carousel " + this.props.containerClass}>
				<Slider {...this.props.options}>
					{Object.keys(itemList).map(item => (
						<CarouselItem
							key={item}
							index={item}
							topContent={convertToTime(itemList[item].dt_txt)}
						/>
					))}
				</Slider>
			</div>
		)
	}
}

export default Carousel;