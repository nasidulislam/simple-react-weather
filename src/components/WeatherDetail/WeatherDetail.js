import React from 'react';
import './WeatherDetail.scss';

// component imports
import BackIconButton from '../IconButtons/BackIconButton';
import Error from '../Error/Error';
import Description from '../Description/Description';

// other imports
import isEmptyObj from '../../core/js/helpers';
import content from "../../core/js/content";

class WeatherDetail extends React.Component {
	// life cycle methods
	componentDidMount() {
		let cities = {};
		let view = { ...this.props.view } || {};

		if(isEmptyObj(this.props.city)) {
			// on a fresh load --> empty state, get cities from local storage for persistence
			cities = JSON.parse(localStorage.getItem("cities"));
			// never load details view, reset to dashboard
			view.currentViewIndex = 2;
			view.currentViewName = "dashboard";
			this.props.setView(view);
		} else {
			// coming in through setup steps, city props are available
			cities = this.props.cities;
		}

		this.props.setCity(cities);
	};

	render() {
		const currentCity = this.props.city || {};

		if(!isEmptyObj(currentCity)) {
			const weatherData = currentCity.weather;
			return(
				<div className="weather-detail-container">
					<div className="weather-detail-header">
						<div className="detail-header-main">
							<span className="header-city-name">{currentCity.cityName}</span>
							<Description
								containerClass="header-weather-description"
								condition={weatherData.condition}
								iconId={weatherData.iconId}
								iconClass="header-description-icon-class"
							/>
							<span className="header-temperature">{this.props.handleTempUnitToggle(currentCity.weather.temp, this.props.tempUnit)}</span>
							<a href={currentCity.mapUrl} target="_blank" rel="noopener noreferrer" className="city-map-link">(See in map)</a>
						</div>
					</div>

					<BackIconButton
						color="primary"
						label={content.weatherDetail.backButton.label}
						buttonClass="detail-back-button"
						containerClass="detail-back-button-container"
						clickHandler={this.props.backButton}
					/>
				</div>
			)
		} else {
			return(
				<div className="weather-detail-container">
					<Error errorMessage={content.common.errorMessage} />
				</div>
			)
		}
	}
}

export default WeatherDetail;