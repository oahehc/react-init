import React from "react";
import { mount } from "enzyme";
import App from "../App";

describe("App", () => {
  it("should match the snapshot", () => {
    const subject = mount(<App />);

    expect(subject).toMatchSnapshot();
  });

  it("should have Title", () => {
    const subject = mount(<App />);

    expect(subject.find("App__Title")).toHaveLength(1);
  });
});
