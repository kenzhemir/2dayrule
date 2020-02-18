import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import React from "react";

import DashboardPage from "../components/DashboardPage";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AddRulePage from "../components/AddRulePage";

export const history = createBrowserHistory();

const AppRouter = () => (
	<Router history={history}>
		<div>
			<Switch>
				<PublicRoute path="/" component={LoginPage} exact={true} />
				<PrivateRoute path="/dashboard" component={DashboardPage} />
				<PrivateRoute path="/addrule" component={AddRulePage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
	</Router>
);

export default AppRouter;
