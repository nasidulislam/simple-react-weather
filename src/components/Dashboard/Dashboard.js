import React from 'react';
import './Dashboard.scss';

// component imports
import PreviewCard from '../PreviewCard/PreviewCard';
import Error from '../Error/Error';
import ToggleButton from 'react-toggle-button';

// other imports
import isEmptyObj from '../core/js/helpers';

class Dashboard extends React.Component {
    state = {
      cities: {}
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

        this.setState({ cities });
    }

    render() {
        let cities = this.state.cities;

        if(isEmptyObj(cities)) {
            return(
                <div className="dashboard-container">
                    <Error errorMessage="Something went wrong. Please try again later" />
                </div>
            )
        } else {
            return(
		        <div className="dashboard-container">
                    <div className="dashboard-header">
                        <div className="dashboard-header-left-content">Add button</div>
                        <div className="dashboard-header-right-content">
	                        <ToggleButton
		                        value={ this.state.value || false }
                                activeLabel="C"
                                inactiveLabel="F"
		                        onToggle={(value) => {
			                        this.setState({
				                        value: !value,
			                        })
		                        }} />

                        </div>
                    </div>
                    <div className="dashboard-preview-card-list">
                        {Object.keys(cities).map(city => (
                            <PreviewCard
                                key={city}
                                index={city}
                                city={cities[city]}
                            />
                        ))}
                    </div>
		        </div>
	        )
        }
    }
}

export default Dashboard;
