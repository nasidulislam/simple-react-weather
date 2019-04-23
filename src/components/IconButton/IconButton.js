import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const IconButton = (props) => {
	return(
		<Fab color={props.color} aria-label={props.label} className={props.classList}>
			<AddIcon />
		</Fab>
	)
};

export default IconButton;