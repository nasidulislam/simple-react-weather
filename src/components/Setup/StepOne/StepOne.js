import React from 'react';
import './StepOne.scss';

// other imports
import Button from '../../Button/Button';
import '../Setup.scss';

const StepOne = (props) => {
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
                <span className="step-one-middle-content-text">
                    You can add your cities and locales to your dashboard for easy access
                </span>

                {/*TODO: Place screenshot of finished setup app */}
                <img src="" alt="" className="step-one-middle-content-image" />
            </div>

            <div className="setup-step-one-bottom">
                <Button
                    containerClass="step-one-bottom-content-one"
                    buttonClass="step-one-continue-button"
                    label="Lets get started"
                    variant="primary-button"
                    clickHandler={props.nextStepButtonHandler}
                />
            </div>
        </div>
    )
}

export default StepOne;
