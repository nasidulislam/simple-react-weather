import React, { Component } from 'react';
import './App.scss';

// component imports
import StepOne from './Setup/StepOne/StepOne';
import StepTwo from './Setup/StepTwo/StepTwo';
import Dashboard from './Dashboard/Dashboard';

// other imports
import './core/variables.scss';
import './core/reset.scss';

class App extends Component {
    state = {
        view: {
            viewArray: ["step-one", "step-two", "dashboard"],
            currentViewName: "",
            currentViewIndex: null
        },

        cities: {},
        query: ""
    }

    // custom method start
    handleSetupSteps = () => {
        const view = { ...this.state.view };
        const nextStepIndex = view.currentViewIndex + 1;
        const nextViewName = view.viewArray[nextStepIndex]

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
    }

    handlePlaceSelect = () => {
        let addressObject = window.autocomplete.getPlace();
        let address = addressObject.address_components;

        if (address) {
            // copy state
            const cities = { ...this.state.cities };
            // extract info we need
            const cityName = address[0].long_name;
            const provinceName = address[address.length - 2].long_name
            const countryLongName = address[address.length - 1].long_name;
            const countryShortName = address[address.length - 1].short_name;
            const mapUrl = addressObject.url;
            const photos = addressObject.photos;
            const query = addressObject.formatted_address;
            // create state object
            const objKey = cityName + provinceName + countryShortName;
            if(cities[objKey] !== null) {
                cities[objKey] = { cityName, provinceName,countryLongName, countryShortName, mapUrl, photos };
            }

            this.setState({ cities, query });
        }
    }

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
                <Dashboard nextStepButtonHandler={this.handleSetupSteps} />
            )
        } else {
            return(
                <div>Here</div>
            )
        }
    }
}

export default App;
