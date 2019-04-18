import React from 'react';
import './StepTwo.scss';

// component imports
import AddCity from '../../AddCity/AddCity';

class StepTwo extends React.Component {
    render() {
        return(
            <div className="setup-step-two-container">
                <div className="setup-step-two-top">
                    <AddCity />
                </div>
            </div>
        )
    }
}

export default StepTwo;
