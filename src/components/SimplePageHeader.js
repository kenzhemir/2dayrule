import React from "react";
import { Link } from "react-router-dom";

export const SimplePageHeader = props => {
	return (
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">{props.title}</h1>
			</div>
		</div>
	);
};

export default SimplePageHeader;
