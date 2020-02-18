import "core-js/stable";
import "react-dates/initialize";
import "regenerator-runtime/runtime";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import "normalize.css";
import "react-dates/lib/css/_datepicker.css";

import { firebase } from "./firebase/firebase";
import { login, logout } from "./redux/auth";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import LoadingPage from "./components/LoadingPage";

import "./styles/styles.scss";
import { startSetRules } from "./redux/rules";

const store = configureStore();

const jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(jsx, document.getElementById("app"));
		hasRendered = true;
	}
};

ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
	if (user) {
		store.dispatch(login(user.uid));
		// store.dispatch(startSetRules());
		renderApp();
		if (history.location.pathname === "/") {
			history.push("/dashboard");
		}
	} else {
		store.dispatch(logout());
		store.dispatch(setRules([]));
		renderApp();
		history.push("/");
	}
});
