import React, { useState } from "react";
import uuid from "uuid";

const RulesForm = ({ submitHandler }) => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const handle = f => e => f(e.target.value);
	const onSubmit = e => {
		e.preventDefault();
		setName("");
		setDescription("");
		submitHandler({ id: uuid(), name, description });
	};
	return (
		<form onSubmit={onSubmit}>
			<input
				required
				type="text"
				value={name}
				placeholder="Rule name"
				onChange={handle(setName)}
			/>
			<textarea
				value={description}
				placeholder="Rule description (optional)"
				onChange={handle(setDescription)}
			/>
			<button type="submit">Save</button>
		</form>
	);
};

export default RulesForm;
