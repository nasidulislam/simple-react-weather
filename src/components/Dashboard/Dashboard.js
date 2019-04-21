import React from 'react';
import './Dashboard.scss';

// component imports
import PreviewCard from '../PreviewCard/PreviewCard';
import Error from '../Error/Error';

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
            cities = localStorage.getItem("cities");
        } else {
	        // coming in through setup steps
            cities = this.props.cities;
        }

        this.setState({ cities });
    }

    render() {
        let cities = this.state.cities;

        if(isEmptyObj(cities)) {
            return(<Error errorMessage="Something went wrong. Please try again later" />)
        } else {
            cities = JSON.parse(cities);

	        return(
		        <div className="dashboard-container">
			        {Object.keys(cities).map(city => (
				        <PreviewCard
					        key={city}
					        index={city}
					        city={cities[city]}
				        />
			        ))}
		        </div>
	        )
        }
    }
}

export default Dashboard;
