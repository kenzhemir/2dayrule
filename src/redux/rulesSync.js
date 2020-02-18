import { addRule, removeRule, editRule, setRules } from "./rules";
import database from "../firebase/firebase";

/** Action types */
export const SYNC = "SYNC";
export const UNSYNC = "UNSYNC";

/** Action creators */
export const sync = () => ({ type: SYNC });
export const unsync = () => ({ type: UNSYNC });

/** Async Action creators */
export const syncRules = () => (dispatch, getState) => {
	const ref = database.ref(`/users/${getState().auth.uid}/rules/`);
	ref.on("child_added", snapshot =>
		dispatch(addRule({ ...snapshot.val(), id: snapshot.key }))
	);
	ref.on("child_removed", snapshot => dispatch(removeRule(snapshot.key)));
	ref.on("child_changed", snapshot =>
		dispatch(editRule(snapshot.key, snapshot.val()))
	);
	dispatch(sync());
};

export const unsyncRules = () => (dispatch, getState) => {
	const ref = database.ref(`/users/${getState().auth.uid}/rules/`);
	ref.off();
	dispatch(setRules([]));
	dispatch(unsync());
};

/** Selector */
export const getSyncStatus = state => state.rulesSync === true;

/** Reducer */
export const rulesSyncReducer = (state = false, action) => {
	switch (action.type) {
		case SYNC:
			return true;
		case UNSYNC:
			return false;
		default:
			return state;
	}
};

export default rulesSyncReducer;
