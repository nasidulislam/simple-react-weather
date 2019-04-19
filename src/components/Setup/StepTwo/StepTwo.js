import React from 'react';
import './StepTwo.scss';

// component imports
import AddCity from '../../AddCity/AddCity';
import Button from '../../Button/Button';

class StepTwo extends React.Component {
    render() {
        return(
            <div className="setup-step-two-container">
                <div className="setup-step-two-top">
                    <span className="step-two-top-content-one">
                        You can search by City
                    </span>
                </div>

                <div className="setup-step-two-middle">
                    <AddCity
                        handlePlaceSelect={this.props.handlePlaceSelect}
                        addCityValue={this.props.addCityValue}
                    />
                </div>

                <div className="setup-step-two-bottom">
                    <Button
                        containerClass="step-two-bottom-content-one"
                        buttonClass="step-two-continue-button"
                        label="Complete Setup"
                        variant="primary-button"
                        clickHandler={this.props.nextStepButtonHandler}
                    />
                </div>
            </div>
        )
    }
}

export default StepTwo;
