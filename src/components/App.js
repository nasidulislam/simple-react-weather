import React, { Component } from 'react';
import './App.scss';

// component imports
import StepOne from './Setup/StepOne/StepOne';
import StepTwo from './Setup/StepTwo/StepTwo';
import Dashboard from './Dashboard/Dashboard';

// other imports
import './core/scss/variables.scss';
import './core/scss/reset.scss';

class App extends Component {
    state = {
        view: {
            viewArray: ["step-one", "step-two", "dashboard"],
            currentViewName: "",
            currentViewIndex: null
        },

        cities: {},
        query: "",
        tempUnit: "F"
    };

    // custom method start
    handleSetupSteps = () => {
        const view = { ...this.state.view };
        const nextStepIndex = view.currentViewIndex + 1;
        const nextViewName = view.viewArray[nextStepIndex];

        view.currentViewIndex = nextStepIndex;
        view.currentViewName = nextViewName;
        this.setState({ view });
        localStorage.setItem("currentViewName", nextViewName);
    };

    handleLoadingPersistentView = () => {
        // save current view in local storage for persistence
        const currentViewName = localStorage.getItem("currentViewName");
        const view = { ...this.state.view };

        if(currentViewName !== null) {
            const currentViewIndex = view.viewArray.findIndex((elem) => {
                return elem === "currentViewName";
            });

            view.currentViewName = currentViewName;
            view.currentViewIndex = currentViewIndex;
            this.setState({ view });
        } else {
            view.currentViewName = "step-one";
            view.currentViewIndex = 0;
            this.setState({ view });
        }
    };

    handlePlaceSelect = () => {
        let addressObject = window.autocomplete.getPlace();
        let address = addressObject.address_components;

        if (address) {
            // copy state
            const cities = { ...this.state.cities };
            // extract info we need
            const cityName = address[0].long_name;
            const provinceName = address[address.length - 2].long_name;
            const countryLongName = address[address.length - 1].long_name;
            const countryShortName = address[address.length - 1].short_name;
            const mapUrl = addressObject.url;
            const photos = addressObject.photos;
            const query = addressObject.formatted_address;
            const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "," + countryShortName + "&apiKey=7bb01bafabc3c0d73e05a0731e700eed";

            // call weather API with city info
            fetch(weatherUrl)
	            .then(res => res.json())
                .then((data) => {
                    const sunrise = new Date(data.sys.sunrise).toLocaleString();
                    const sunset = new Date(data.sys.sunset).toLocaleString();
                    const main = data.main;
                    const weatherMain = data.weather[0];

	                // create state object
	                const objKey = cityName + provinceName + countryShortName;
	                const weather = {
	                    temp: main.temp,
                        humidity: main.humidity,
                        maxTemp: main.temp_max,
                        minTemp: main.temp_min,
                        cityId: data.id,
                        sunset,
                        sunrise,
                        condition: weatherMain.main,
                        conditionDescription: weatherMain.description,
                        iconId: weatherMain.id
                    };

	                if(cities[objKey] !== null) {
		                cities[objKey] = {
		                    cityName,
                            provinceName,
                            countryLongName,
                            countryShortName,
                            mapUrl,
                            photos,
                            weather
		                };
	                }

	                this.setState({ cities, query });
	                localStorage.setItem("cities", JSON.stringify(cities));
                },
                (error) => {
                    console.log(error);
                });
        }
    };

    onToggle = (value) => {
        const tempUnit = value ? "F" : "C";

	    this.setState({ value: !value, tempUnit });
    };

    setCity = (cities) => {
	    this.setState({ cities });
    };

    // lifecycle methods
    componentDidMount() {
        // this handles persistent view in a specific device
        this.handleLoadingPersistentView();
    }

    render() {
        const view = { ...this.state.view };

        if(view.currentViewName === "step-one") {
            return (
                <div className="app-container">
                    <StepOne nextStepButtonHandler={this.handleSetupSteps} />
                </div>
            );
        } else if(view.currentViewName === "step-two") {
            return (
                <div className="app-container">
                    <StepTwo
                        nextStepButtonHandler={this.handleSetupSteps}
                        handlePlaceSelect={this.handlePlaceSelect}
                        addCityValue={this.state.query}
                        cities={this.state.cities}
                    />
                </div>
            );
        } else if(view.currentViewName === "dashboard") {
            return(
                <div className="app-container">
                    <Dashboard
                        cities={this.state.cities}
                        onToggle={this.onToggle}
                        value={this.state.value}
                        setCity={this.setCity}
                        tempUnit={this.state.tempUnit}
                    />
                </div>
            )
        } else {
            return(
                <div>Here</div>
            )
        }
    }
}

export default App;
