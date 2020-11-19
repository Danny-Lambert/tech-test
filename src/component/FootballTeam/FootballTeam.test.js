import React from "react";
import { render } from "@testing-library/react";
import FootballTeam from "./FootballTeam";

describe("FootballTeam tests", () => {
  it("should render", () => {
    expect(render(<FootballTeam />)).toBeTruthy();
  });
});
