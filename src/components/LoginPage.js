import { connect } from "react-redux";
import React from "react";

import { startLogin } from "../redux/auth";

export const LoginPage = ({ startLogin }) => {
	return (
		<div className="box-layout">
			<div className="box-layout__box">
				<h1 className="box-layout__title">Boilerplate</h1>
				<p>Tagline for app</p>
				<button onClick={startLogin} className="button">
					Log in with Google
				</button>
			</div>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
