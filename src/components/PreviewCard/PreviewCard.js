import React from 'react';
import './PreviewCard.scss';

// other imports
import WeatherIcon from 'react-icons-weather';

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
		const weatherData = city.weather;
		const tempUnit = this.props.tempUnit;
		const temp = Math.ceil(this.handleTempUnitToggle(weatherData.temp, tempUnit)) + " °" + tempUnit;
		const minTemp = Math.ceil(this.handleTempUnitToggle(weatherData.minTemp, tempUnit)) + " °" + tempUnit;
		const maxTemp = Math.ceil(this.handleTempUnitToggle(weatherData.maxTemp, tempUnit)) + " °" + tempUnit;

		return(
			<div className="preview-card-container">
				<div className="preview-card-left-content">
					<div className="left-rail-top-content">
						<span className="left-rail-city-name main-content">{city.cityName}</span>
						<div className="left-rail-description-text">
							<span className="left-rail-description sub-content">
								{weatherData.condition} / {weatherData.conditionDescription}
							</span>
							<WeatherIcon
								name="owm"
								iconId={weatherData.iconId}
								flip="horizontal"
								rotate="90"
							/>
						</div>
					</div>
					<div className="left-rail-bottom-content">
						<span className="left-rail-low-temp">Low: {minTemp}</span>
						<span className="left-rail-high-temp">High: {maxTemp}</span>
					</div>
				</div>
				<div className="preview-card-right-content">
					<span className="right-rail-temp main-content">{temp}</span>
				</div>
			</div>
		)
	}
}

export default PreviewCard;