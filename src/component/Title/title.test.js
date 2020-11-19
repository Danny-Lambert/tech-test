import React from "react";
import { render } from "@testing-library/react";
import title from "./title";

describe("title tests", () => {
  it("should render", () => {
    expect(render(<title />)).toBeTruthy();
  });
});
