import React, { Component } from 'react';
import './App.scss';

// component imports
import StepOne from './Setup/StepOne/StepOne';

// other imports
import './core/variables.scss';
import './core/reset.scss';

class App extends Component {
    state = {
        setupStep: "1"
    }
    render() {
        if(this.state.setupStep === "1") {
            return (
                <div className="app-container">
                    <StepOne />
                </div>
            );
        }
    }
}

export default App;
