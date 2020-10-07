import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getSyncStatus, syncRules, unsyncRules } from "../redux/rulesSync";
import RulesCalendar from "./RulesCalendar";
import RulesList from "./RulesList";
import { startLogout } from "../redux/auth";

export const DashboardPage = props => (
	<div className="dashboard">
		<div className="dashboard__sidebar">
			<Link className="header__title" to="/dashboard">
				<h2>2 Day Rule App</h2>
			</Link>
			<RulesList />
			<button
				type="button"
				className="button button--link"
				onClick={props.logout}
			>
				Exit
			</button>
		</div>
		<div className="dashboard__content">
			<RulesCalendar />
		</div>
	</div>
);

const mapStateToProps = state => ({
	syncStatus: getSyncStatus(state)
});
const mapDispatchToProps = dispatch => ({
	syncRules: () => dispatch(syncRules()),
	unsyncRules: () => dispatch(unsyncRules()),
	logout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
