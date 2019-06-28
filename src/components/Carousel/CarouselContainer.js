import React from 'react';
import './Carousel.scss';

// component imports
import Slider from "react-slick";
import CarouselItem from './CarouselItem';

// other imports
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import convertToTime from '../../core/js/helpers/convertToTime';
import convertTempUnit from '../../core/js/helpers/convertTempUnit';

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
							time={convertToTime(itemList[item].dt_txt)}
							iconId={itemList[item].weather[0].id}
							temp={convertTempUnit(itemList[item].main.temp, this.props.tempUnit)}
							tempUnit={this.props.tempUnit}
							icon={itemList[item].weather[0].icon}
						/>
					))}
				</Slider>
			</div>
		)
	}
}

export default Carousel;