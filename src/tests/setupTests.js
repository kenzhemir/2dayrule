import Adapter from "enzyme-adapter-react-16";
import dotenv from "dotenv";
import Enzyme from "enzyme";

Enzyme.configure({
	adapter: new Adapter()
});
dotenv.config({ path: ".env.test" });
