import React from 'react';
import './Description.scss';

// component imports
import WeatherIcon from 'react-icons-weather';

const Description = (props) => {
	return(
		<div className={"description-container " + props.containerClass}>
			<span className="description-condition">{props.condition}</span>
			<div className={props.iconClass}>
				<WeatherIcon
					name="owm"
					iconId={props.iconId}
					flip="horizontal"
					rotate="90"
				/>
			</div>
		</div>
	)
};

export default Description;