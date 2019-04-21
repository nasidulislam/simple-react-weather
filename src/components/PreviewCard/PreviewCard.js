import React from 'react';
import './PreviewCard.scss';

class PreviewCard extends React.Component {
	render() {
		const city = this.props.city;
		const weatherData = this.props.city.weather;

		return(
			<div className="preview-card-container">
				<div className="preview-card-left-content">
					<span>{city.cityName}</span>
				</div>
				<div className="preview-card-right-content">
					<span>{weatherData.main.temp}</span>
				</div>
			</div>
		)
	}
}

export default PreviewCard;