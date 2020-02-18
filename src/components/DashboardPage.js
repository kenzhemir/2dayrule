import React from "react";
import { connect } from "react-redux";
import { getVisibleRules } from "../redux/rules";
import { syncRules, unsyncRules, getSyncStatus } from "../redux/rulesSync";

const DashboardPage = props => (
	<>
		Your rules:
		<div>
			Listen to add is on: {props.syncStatus.toString()}
			<button
				onClick={() => {
					if (!props.syncStatus) {
						props.syncRules();
					} else {
						props.unsyncRules();
					}
				}}
			>
				turn sync {props.syncStatus ? "off" : "on"}
			</button>
		</div>
		<div>
			{props.rules.map(rule => (
				<div key={rule.id}>
					<h3>{rule.name}</h3>
					<p>{rule.description}</p>
				</div>
			))}
		</div>
	</>
);

const mapStateToProps = state => ({
	rules: getVisibleRules(state.rules),
	syncStatus: getSyncStatus(state)
});
const mapDispatchToProps = dispatch => ({
	syncRules: () => dispatch(syncRules()),
	unsyncRules: () => dispatch(unsyncRules())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
