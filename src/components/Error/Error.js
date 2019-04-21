import React from 'react';
import './Error.scss';

const Error = (props) => {
	return(
		<div className="error-container">{props.errorMessage}</div>
	)
};

export default Error;