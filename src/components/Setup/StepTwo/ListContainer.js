import React from 'react';
import './ListContainer.scss';

// component imports
import ListItem from './ListItem';

class ListContainer extends React.Component {
    render() {
        return(
            <div className="list-container">
                <span className="list-container-header">You've selected</span>

                {Object.keys(this.props.listItems).map(city => (
                    <ListItem
                        key={city}
                        index={city}
                        city={this.props.listItems[city]}
                    />
                ))}

            </div>
        )
    }
}

export default ListContainer;
