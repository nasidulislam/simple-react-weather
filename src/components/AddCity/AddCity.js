import React from 'react';
import './AddCity.scss';

// other imports
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class AddCity extends React.Component {
    state = {
        city: "",
        query: ""
    }

    handleScriptLoad() {
        // Declare Options For Autocomplete
        var options = { types: ['(cities)'] };
        // Initialize Google Autocomplete
        /*global google*/
        // To disable any eslint 'google not defined' errors
        window.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options);

        // Fire Event when a suggested name is selected
        window.autocomplete.addListener('place_changed', this.handlePlaceSelect);
    }

    handlePlaceSelect() {
        // Extract City From Address Object
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.address_components;

        // Check if address is valid
        if (address) {
            // Set State
            this.setState({
                city: address[0].long_name,
                query: addressObject.formatted_address
            });
        }
    }

    render() {
        return(
            <div className="add-city-container">
                <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBB3r62SVFhhMiBAE1OsmhNJkipwe445rQ&libraries=places" onLoad={this.handleScriptLoad}
                />
                <MuiThemeProvider>
                    <SearchBar
                        id="autocomplete"
                        className="add-city-search-bar"
                        placeholder=""
                        hintText="Search City"
                        onChange={this.handleChange}
                        />
                </MuiThemeProvider>
            </div>
        )
    }
}

export default AddCity;
