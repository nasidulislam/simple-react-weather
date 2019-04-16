import React, { Component } from 'react';
import '../stylesheets/App.scss';

// component imports
import Setup from './Setup';
// other imports
import '../stylesheets/reset.scss';
import '../stylesheets/variables.scss';

class App extends Component {
  render() {
    return (
        <div className="app-container">
            <Setup />
        </div>
    );
  }
}

export default App;
