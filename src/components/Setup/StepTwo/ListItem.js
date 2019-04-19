import React from 'react';
import './ListItem.scss'

class ListItem extends React.Component {
    render() {
        const props = this.props;
        return(
            <div className="list-item">
                <span>{props.city.cityName}</span>
                <span>{props.city.provinceName}</span>
                <span>{props.city.countryLongName}</span>
            </div>
        )
    }
}

export default ListItem;
