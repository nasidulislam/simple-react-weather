import React from 'react';
import './WeatherDetail.scss';

// other imports
import isEmptyObj from '../core/js/helpers';
import content from '../core/js/content';

class WeatherDetail extends React.Component {
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
		return(
			<div className="weather-detail-container">something</div>
		)
	}
}

export default WeatherDetail;