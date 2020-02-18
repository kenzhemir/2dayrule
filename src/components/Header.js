import { connect } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";

import { startLogout } from "../redux/auth";

export const Header = ({ startLogout }) => (
	<header className="header">
		<div className="content-container">
			<div className="header__content">
				<Link className="header__title" to="/dashboard">
					<h1>2 Day Rule App</h1>
				</Link>
				<button onClick={startLogout} className="button button--link">
					Logout
				</button>
			</div>
			<div className="header__content">
				<nav>
					<Link to="/" className="button button--link">
						Dashboard
					</Link>
					<Link to="/addrule" className="button button--link">
						Add Rule
					</Link>
				</nav>
			</div>
		</div>
	</header>
);
const mapDispatchToProps = dispatch => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
