import React from "react";
import { render } from "@testing-library/react";
import form from "./form";

describe("form tests", () => {
  it("should render", () => {
    expect(render(<form />)).toBeTruthy();
  });
});
