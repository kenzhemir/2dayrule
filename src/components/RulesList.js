import React from "react";
import { getVisibleRules } from "../redux/rules";
import { connect } from "react-redux";

export const RulesList = props => {
	const onClick = e => {
		e.target.classList.toggle("nonvisible");
		// TODO: API call to make rule invisible
	};
	return (
		<ul className="rules-list">
			{props.rules.map(rule => (
				<li key={rule.id} className="rules-list-item">
					<p className="rules-list-item__name">{rule.name}</p>
					<div className="rules-list-item__toggle" onClick={onClick}></div>
				</li>
			))}
		</ul>
	);
};

const mapStateToProps = state => ({
	rules: getVisibleRules(state.rules)
});

export default connect(mapStateToProps)(RulesList);
