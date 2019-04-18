import React from 'react';
import '../stylesheets/Setup.scss';

class SetupStepOne extends React.Component {
    render() {
        return (
            <div className="setup-step-one-container">
                <div className="steup-step-one-top">
                    <span className="step-one-top-content-one">
                        Hello and welcome to your favorite weather app
                    </span>
                    <span className="step-one-top-content-two">
                        All your weather curiosity at your fingertips
                    </span>
                </div>

                <div className="steup-step-one-middle">
                    <span className="step-one-middle-content">
                        You can add your cities and locales to your dashboard for easy access
                    </span>
                </div>

                <div className="steup-step-one-bottom">

                </div>
            </div>
        )
    }
}

export default SetupStepOne;
