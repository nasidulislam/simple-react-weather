import React from 'react';
import './StepOne.scss';

// component imports
import Button from '../../Button/Button';
import '../Setup.scss';

// other imports
import content from '../../core/js/content';

const StepOne = (props) => {
    return (
        <div className="setup-step-one-container">
            <div className="setup-step-one-top">
                <span className="step-one-top-content-one">{content.stepOne.topContent.one}</span>
                <span className="step-one-top-content-two">{content.stepOne.topContent.two}</span>
            </div>

            <div className="setup-step-one-middle">
                <span className="step-one-middle-content-one">{content.stepOne.middleContent.one}</span>

                {/*TODO: Place screenshot of finished setup app */}
                <img src="" alt="" className="step-one-middle-content-two" />
            </div>

            <div className="setup-step-one-bottom">
                <Button
                    containerClass="step-one-bottom-content-one"
                    buttonClass="step-one-continue-button"
                    label={content.stepOne.bottomContent.primaryButtonLabel}
                    variant="primary-button"
                    clickHandler={props.nextStepButtonHandler}
                />
            </div>
        </div>
    )
}

export default StepOne;
