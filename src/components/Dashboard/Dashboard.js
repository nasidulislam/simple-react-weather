import React from 'react';
import './Dashboard.scss';

// component imports
import PreviewCard from '../PreviewCard/PreviewCard';
import Error from '../Error/Error';
import ToggleButton from 'react-toggle-button';

// other imports
import isEmptyObj from '../core/js/helpers';
import content from '../core/js/content';

class Dashboard extends React.Component {
    onToggle = (value) => {
        this.props.onToggle(value);
	};

    componentDidMount() {
        let cities = {};

        if(isEmptyObj(this.props.cities)) {
            // on a fresh load --> empty state
            cities = JSON.parse(localStorage.getItem("cities"));
        } else {
	        // coming in through setup steps
            cities = this.props.cities;
        }

        this.props.setCity(cities);
    }

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
                        <div className="dashboard-header-left-content">Add button</div>
                        <div className="dashboard-header-right-content">
	                        <ToggleButton
		                        value={ this.props.value || false }
                                activeLabel={content.dashboard.toggleButton.activeLabel}
                                inactiveLabel={content.dashboard.toggleButton.inactiveLabel}
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
                            />
                        ))}
                    </div>
		        </div>
	        )
        }
    }
}

export default Dashboard;
