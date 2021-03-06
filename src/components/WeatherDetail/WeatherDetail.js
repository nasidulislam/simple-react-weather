import React from 'react';
import './WeatherDetail.scss';

// component imports
import BackIconButton from '../IconButtons/BackIconButton';
import Error from '../Error/Error';
import Description from '../Description/Description';
import InfoCard from '../InfoCard/InfoCard';
import Carousel from '../Carousel/CarouselContainer';

// other imports
import isEmptyObj from '../../core/js/helpers/IsEmptyObj';
import content from "../../core/js/content";
import convertTempUnit from '../../core/js/helpers/convertTempUnit';

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
		const carouselOptions = {
			dots: false,
			arrows: false,
			infinite: false,
			slidesToShow: 3
		};

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
						</div>
					</div>

					<div className="detail-info-card-container">
						<div className="detail-info-card-row detail-temp-humid-container">
							<InfoCard
								header="temperature"
								details={convertTempUnit(weatherData.temp, this.props.tempUnit)}
								containerClass="details-info-card-temp-container"
								unit={" °" + this.props.tempUnit}
								variant="large"
							/>
							<InfoCard
								header="humidity"
								details={weatherData.humidity}
								containerClass="details-info-card-humidity-container"
								unit="%"
								variant="large"
							/>
						</div>

						<div className="detail-info-card-row detail-wind-pressure-container">
							<InfoCard
								header="wind"
								details={weatherData.wind.speed}
								containerClass="details-info-card-wind-container"
								unit="m/s"
								variant="large"
							/>
							<InfoCard
								header="pressure"
								details={Math.floor((weatherData.pressure)/1000)}
								containerClass="details-info-card-pressure-container"
								unit="khpa"
								variant="large"
							/>
						</div>
					</div>

					<Carousel
						containerClass="forecast-carousel-container"
						itemList={currentCity.forecast}
						options={carouselOptions}
						tempUnit={this.props.tempUnit}
					/>

					<div className="detail-info-card-container">
						<div className="detail-info-card-row detail-sunrise-sunset-container">
							<InfoCard
								header="sunrise"
								details={weatherData.sunrise}
								containerClass="details-info-card-wind-container"
								variant="small"
							/>
							<InfoCard
								header="sunset"
								details={weatherData.sunset}
								containerClass="details-info-card-pressure-container"
								variant="small"
							/>
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