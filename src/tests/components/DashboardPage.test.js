import { shallow } from "enzyme";
import React from "react";

import DashboardPage from "../../components/DashboardPage";

test("should render expense list with expenses", () => {
	const wrapper = shallow(<DashboardPage />);
	expect(wrapper).toMatchSnapshot();
});
