import React from 'react';
import './Dashboard.scss';

// other imports
import isEmptyObj from '../core/js/helpers';

class Dashboard extends React.Component {
    componentDidMount() {
        let cities = {};
        if(isEmptyObj(this.props.cities)) {
            // on a fresh load --> empty state
            cities = localStorage.getItem("cities");
        } else {
	        // coming in through setup steps
            cities = this.props.cities;
        }
    }

    render() {
        return(
            <div className="dashboard-container">
            </div>
        )
    }
}

export default Dashboard;
