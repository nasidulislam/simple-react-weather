import React from 'react';
import './PreviewCard.scss';

// component imports
import WeatherIcon from 'react-icons-weather';

// other import
import content from '../../core/js/content';

class PreviewCard extends React.Component {
	showDetails = () => {
		this.props.showCityDetails(this.props.city);
	};

	render() {
		const city = this.props.city;
		const weatherData = city.weather;
		const tempUnit = this.props.tempUnit;
		const temp = Math.ceil(this.props.handleTempUnitToggle(weatherData.temp, tempUnit)) + " °" + tempUnit;
		const minTemp = Math.ceil(this.props.handleTempUnitToggle(weatherData.minTemp, tempUnit)) + " °" + tempUnit;
		const maxTemp = Math.ceil(this.props.handleTempUnitToggle(weatherData.maxTemp, tempUnit)) + " °" + tempUnit;

		return(
			<div className="preview-card-container" onClick={this.showDetails}>
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
						<span className="left-rail-low-temp">{content.previewCard.leftRail.low}: {minTemp}</span>
						<span className="left-rail-high-temp">{content.previewCard.leftRail.high}: {maxTemp}</span>
					</div>
				</div>
				<div className="preview-card-right-content">
					<span className="right-rail-temp">{temp}</span>
				</div>
			</div>
		)
	}
}

export default PreviewCard;