import React from 'react';
import Fab from '@material-ui/core/Fab';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import './IconButtons.scss'

const BackIconButton = (props) => {
	return(
		<div className={props.containerClass} onClick={props.clickHandler}>
			<Fab color={props.color} aria-label={props.label} className={"icon-button " + props.buttonClass}>
				<ArrowLeft />
			</Fab>
		</div>
	)
};

export default BackIconButton;