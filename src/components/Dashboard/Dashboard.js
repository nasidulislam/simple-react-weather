import React from 'react';
import './Dashboard.scss';

// component imports
import PreviewCard from '../PreviewCard/PreviewCard';
import Error from '../Error/Error';
import ToggleButton from 'react-toggle-button';
import AddIconButton from '../IconButtons/AddIconButton';

// other imports
import isEmptyObj from '../../core/js/helpers';
import content from '../../core/js/content';

class Dashboard extends React.Component {
	// custom methods
    onToggle = (value) => {
        this.props.onToggle(value);
	};

    // life cycle methods
    componentDidMount() {
        let cities = {};

        if(isEmptyObj(this.props.cities)) {
            // on a fresh load --> empty state, get cities from local storage for persistence
            cities = JSON.parse(localStorage.getItem("cities"));
        } else {
	        // coming in through setup steps, city props are available
            cities = this.props.cities;
        }

        this.props.setCity(cities);
    };

    render() {
        let cities = this.props.cities;

        if(isEmptyObj(cities)) {
            return(
                <div className="dashboard-container">
                    <Error errorMessage={content.dashboard.errorMessage} />
                </div>
            )
        } else {
            return(
		        <div className="dashboard-container">
                    <div className="dashboard-header">
                        <div className="dashboard-header-left-content">
	                        <AddIconButton
		                        color="primary"
		                        label={content.dashboard.addButton.label}
		                        buttonClass="dashboard-add-city-icon-button"
		                        containerClass="dashboard-add-city-icon-button-container"
	                        />
                        </div>
                        <div className="dashboard-header-right-content">
	                        <ToggleButton
		                        value={ this.props.value || false }
                                activeLabel={content.common.toggleButton.activeLabel}
                                inactiveLabel={content.common.toggleButton.inactiveLabel}
		                        onToggle={this.onToggle} />

                        </div>
                    </div>
                    <div className="dashboard-preview-card-list">
                        {Object.keys(cities).map(city => (
                            <PreviewCard
                                key={city}
                                index={city}
                                city={cities[city]}
                                tempUnit={this.props.tempUnit}
                                showCityDetails={this.props.showCityDetails}
                                handleTempUnitToggle={this.props.handleTempUnitToggle}
                            />
                        ))}
                    </div>
		        </div>
	        )
        }
    };
}

export default Dashboard;
