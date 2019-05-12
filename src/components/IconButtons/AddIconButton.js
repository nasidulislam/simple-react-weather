import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import './IconButtons.scss';

const AddIconButton = (props) => {
	return(
		<div className={props.containerClass} onClick={props.clickHandler}>
			<Fab color={props.color} aria-label={props.label} className={"icon-button " + props.buttonClass}>
				<AddIcon />
			</Fab>
		</div>
	)
};

export default AddIconButton;