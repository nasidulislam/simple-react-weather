import React from 'react';
import './InfoCard.scss';

const InfoCard = (props) => {
	return(
		<div className={"info-card " + props.containerClass}>
			<span className="info-card-header">{props.header}</span>
			<span className="info-card-details">{props.details}</span>
		</div>
	)
};

export default InfoCard;