import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import React from "react";

import Header from "../components/Header";

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			component={props =>
				isAuthenticated ? (
					<div>
						<Header />
						<Component {...props} />
					</div>
				) : (
					<Redirect to="/" />
				)
			}
		/>
	);
};

const mapStateToProps = state => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);
