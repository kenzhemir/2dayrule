import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

import { startLogout } from "../actions/auth";

export const Header = ({ startLogout }) => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<Link className="header__title" to="/dashboard">
					<h1>Boilerplate</h1>
				</Link>
				<button onClick={startLogout} class="button button--link">
					Logout
				</button>
			</div>
		</div>
	</header>
);
const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
