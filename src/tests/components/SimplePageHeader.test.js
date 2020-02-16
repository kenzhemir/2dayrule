import { shallow } from "enzyme";
import React from "react";

import { SimplePageHeader } from "../../components/SimplePageHeader";

test("should render correctly", () => {
	const wrapper = shallow(<SimplePageHeader title="Simple title" />);
	expect(wrapper).toMatchSnapshot();
});
