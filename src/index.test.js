import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

import Loader from "./index";

describe("DOM", () => {
  it("renders 2 divs", () => {
    const wrapper = mount(<Loader />);
    expect(wrapper.find("div").length).toBe(2);
  });
  it("renders 1 span", () => {
    const wrapper = mount(<Loader />);
    expect(wrapper.find("span").length).toBe(1);
  });
  it("renders 1 .loader-text", () => {
    const wrapper = mount(<Loader />);
    expect(wrapper.find(".loader-text").length).toBe(1);
  });
});
