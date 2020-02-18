import React, { useState, useEffect } from "react";
import { startAddRule } from "../redux/rules";
import RulesForm from "./RulesForm";
import { connect } from "react-redux";

export const AddRulePage = props => {
	const [message, setMessage] = useState("");
	useEffect(() => {
		const timer = setTimeout(() => {
			setMessage("");
		}, 3000);
		return () => {
			clearTimeout(timer);
		};
	}, [message]);
	const submitHandler = data => {
		props.addRule(data).then(() => {
			setMessage("Data is saved!");
		});
	};
	return (
		<div>
			<h3>Add new Rule</h3>
			<p>{message}</p>
			<RulesForm submitHandler={submitHandler} />
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	addRule: rule => dispatch(startAddRule(rule))
});

export default connect(undefined, mapDispatchToProps)(AddRulePage);
