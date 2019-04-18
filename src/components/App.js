import React, { Component } from 'react';
import './App.scss';

// component imports
import StepOne from './Setup/StepOne/StepOne';
import StepTwo from './Setup/StepTwo/StepTwo';

// other imports
import './core/variables.scss';
import './core/reset.scss';

class App extends Component {
    state = {
        currentSetupStep: 1
    }

    handleSetupSteps = () => {
        const nextStep = this.state.currentSetupStep + 1;

        this.setState({ currentSetupStep: nextStep });
    };

    render() {
        if(this.state.currentSetupStep === 1) {
            return (
                <div className="app-container">
                    <StepOne nextStepButtonHandler={this.handleSetupSteps} />
                </div>
            );
        } else if(this.state.currentSetupStep === 2){
            return (
                <div className="app-container">
                    <StepTwo nextStepButtonHandler={this.handleSetupSteps} />
                </div>
            );
        } else {
            return(
                <div>Here</div>
            )
        }
    }
}

export default App;
