import React from 'react';
import './PreviewCard.scss';

class PreviewCard extends React.Component {
	handleTempUnitToggle = (temp, tempUnit) => {
		if(tempUnit === "F") {
			return ((temp - 273.15) * 1.8) + 32
		} else {
			return temp - 273.15
		}
	};

	render() {
		const city = this.props.city;
		const kelvinTemp = city.weather.temp;
		const tempUnit = this.props.tempUnit;
		const temp = Math.ceil(this.handleTempUnitToggle(kelvinTemp, tempUnit)) + " °" + tempUnit;

		return(
			<div className="preview-card-container">
				<div className="preview-card-left-content">
					<span className="left-rail-city-name main-content">{city.cityName}</span>
				</div>
				<div className="preview-card-right-content">
					<span className="right-rail-temp main-content">{temp}</span>
				</div>
			</div>
		)
	}
}

export default PreviewCard;