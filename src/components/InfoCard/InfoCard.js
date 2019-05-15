import React from 'react';
import './InfoCard.scss';

const InfoCard = (props) => {
	return(
		<div className={"info-card " + props.containerClass + " " + props.variant}>
			<div className="info-card-header">{props.header}</div>
			<div className="info-card-details">
				<span>{props.details}</span>
				<span className="info-card-description-unit">{props.unit}</span>
			</div>
		</div>
	)
};

export default InfoCard;