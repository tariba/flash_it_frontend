import React from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Card from "./QCard.js";

test("", () => {
  const { container } = render(<Card qText="text" />);
  const element = container.querySelector("p");
  expect(element).toBeTruthy();
});
