import React from 'react';
import './WeatherDetail.scss';

// component imports
import ToggleButton from 'react-toggle-button';
import BackIconButton from '../IconButtons/BackIconButton';

// other imports
import isEmptyObj from '../../core/js/helpers';
import content from "../../core/js/content";

class WeatherDetail extends React.Component {
	// custom methods
	onToggle = (value) => {
		this.props.onToggle(value);
	};

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
		return(
			<div className="weather-detail-container">
				<div className="weather-detail-header">
					<BackIconButton
						color="primary"
						label={content.weatherDetail.backButton.label}
						buttonClass="detail-header-back-button"
						containerClass="detail-header-back-button-container"
						clickHandler={this.props.backButton}
					/>

					<div className="detail-header-main">
						<span className="header-city-name">{currentCity.cityName}</span>
						<span className="header-province-name">{currentCity.provinceName}, {currentCity.countryLongName}</span>
						<a href={currentCity.mapUrl} target="_blank" rel="noopener noreferrer" className="city-map-link">(See in map)</a>
					</div>

					<div className="detail-header-right-content">
						<ToggleButton
							value={ this.props.value || false }
							activeLabel={content.common.toggleButton.activeLabel}
							inactiveLabel={content.common.toggleButton.inactiveLabel}
							onToggle={this.onToggle} />
					</div>
				</div>
			</div>
		)
	}
}

export default WeatherDetail;