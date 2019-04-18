import React, { Component } from 'react';
import '../stylesheets/App.scss';

// component imports
import SetupStepOne from './SetupStepOne';
// other imports
import '../stylesheets/reset.scss';
import '../stylesheets/variables.scss';

class App extends Component {
    state = {
        setupStep: "1"
    }
    render() {
        if(this.state.setupStep === "1") {
            return (
                <div className="app-container">
                    <SetupStepOne />
                </div>
            );
        }
    }
}

export default App;
