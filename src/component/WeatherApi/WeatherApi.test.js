import React from "react";
import { render } from "@testing-library/react";
import WeatherApi from "./WeatherApi";

describe("WeatherApi tests", () => {
  it("should render", () => {
    expect(render(<WeatherApi />)).toBeTruthy();
  });
});
