import React from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Cards from "./Cards.js";

test("Check for class", () => {
  const { container } = render(<Cards />);
  const element = container.querySelector(".cards");
  expect(element).toBeTruthy();
});
