import React from 'react';
import './StepOne.scss';

class StepOne extends React.Component {
    render() {
        return (
            <div className="setup-step-one-container">
                <div className="setup-step-one-top">
                    <span className="step-one-top-content-one">
                        Hello and welcome to your favorite weather app
                    </span>
                    <span className="step-one-top-content-two">
                        All your weather curiosity at your fingertips
                    </span>
                </div>

                <div className="setup-step-one-middle">
                    <span className="step-one-middle-content">
                        You can add your cities and locales to your dashboard for easy access
                    </span>
                </div>

                <div className="setup-step-one-bottom">

                </div>
            </div>
        )
    }
}

export default StepOne;
