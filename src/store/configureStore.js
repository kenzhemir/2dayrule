import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import authReducer from "../redux/auth";
import rulesReducer from "../redux/rules";
import rulesSyncReducer from "../redux/rulesSync";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
	const store = createStore(
		combineReducers({
			auth: authReducer,
			rules: rulesReducer,
			rulesSync: rulesSyncReducer
		}),
		composeEnhancers(applyMiddleware(thunk))
	);
	return store;
};
