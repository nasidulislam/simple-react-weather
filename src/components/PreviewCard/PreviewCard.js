import React from 'react';
import './PreviewCard.scss';

// component imports
import Description from '../Description/Description';

// other import
import content from '../../core/js/content';
import convertTempUnit from '../../core/js/helpers/convertTempUnit';

class PreviewCard extends React.Component {
	showDetails = () => {
		this.props.showCityDetails(this.props.city);
	};

	render() {
		const city = this.props.city;
		const weatherData = city.weather;
		const tempUnit = this.props.tempUnit;
		const temp = convertTempUnit(weatherData.temp, tempUnit) + " °" + tempUnit;
		const minTemp = convertTempUnit(weatherData.minTemp, tempUnit) + " °" + tempUnit;
		const maxTemp = convertTempUnit(weatherData.maxTemp, tempUnit) + " °" + tempUnit;

		return(
			<div className="preview-card-container" onClick={this.showDetails}>
				<div className="preview-card-left-content">
					<div className="left-rail-top-content">
						<span className="left-rail-city-name main-content">{city.cityName}</span>
						<Description
							containerClass="left-rail-description-text"
							condition={weatherData.condition}
							iconId={weatherData.iconId}
						/>
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