import database from "../firebase/firebase";

/** Rules Action types */
export const SET_RULES = "SET_RULES";
export const ADD_RULE = "ADD_RULE";
export const EDIT_RULE = "EDIT_RULE";
export const REMOVE_RULE = "REMOVE_RULE";

/** Rules Action creators */
export const setRules = rules => ({ type: SET_RULES, rules });
export const addRule = rule => ({ type: ADD_RULE, rule });
export const editRule = (id, updates) => ({ type: EDIT_RULE, id, updates });
export const removeRule = id => ({ type: REMOVE_RULE, id });

/** Rules Async Action creators */
export const startSetRules = () => (dispatch, getState) => {
	database
		.ref(`/users/${getState().auth.uid}/rules`)
		.once("value")
		.then(snapshot => {
			const rules = [];
			snapshot.forEach(ruleSnapshot => {
				rules.push({ ...ruleSnapshot.val(), id: ruleSnapshot.key });
			});
			return rules;
		})
		.then(setRules)
		.then(dispatch);
};

export const startAddRule = rule => (_dispatch, getState) => {
	return database
		.ref(`/users/${getState().auth.uid}/rules/${rule.id}`)
		.set({ ...rule, id: null });
};

export const startEditRule = (id, updates) => (_dispatch, getState) => {
	return database
		.ref(`/users/${getState().auth.uid}/rules/${id}`)
		.update(updates);
};

export const startRemoveRule = id => (_dispatch, getState) => {
	return database.ref(`/users/${getState().auth.uid}/rules/${id}`).remove();
};

/** Rules Selector */
export const getVisibleRules = rules => rules;

/** Rules Reducer */
export const rulesReducer = (state = [], action) => {
	switch (action.type) {
		case SET_RULES:
			return action.rules;
		case ADD_RULE:
			return [...state, action.rule];
		case EDIT_RULE:
			return state.map(rule =>
				rule.id == action.id ? { ...rule, ...action.updates } : rule
			);
		case REMOVE_RULE:
			return state.filter(rule => rule.id != action.id);
		default:
			return state;
	}
};

export default rulesReducer;
