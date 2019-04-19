import React from 'react';
import './ListContainer.scss';

// component imports
import ListItem from './ListItem';

class ListContainer extends React.Component {
    render() {
        return(
            <ul className="list-container">

                {Object.keys(this.props.listItems).map(city => (
                    <ListItem
                        key={city}
                        index={city}
                        city={this.props.listItems[city]}
                    />
                ))}

            </ul>
        )
    }
}

export default ListContainer;
