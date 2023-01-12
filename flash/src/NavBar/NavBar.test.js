import React from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";

import NavBar from "./NavBar.js";

test("Technical button renders", () => {
  render(<NavBar buttonText="Technical" />);
  const button = screen.getByText("Technical");
  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Technical");
});

test("Behavioural Button", () => {
  render(<NavBar buttonText="Behavioural" />);
  const button = screen.getByText("Behavioural");
  expect(button).toBeTruthy();
  expect(button).toHaveTextContent("Behavioural");
});

test("Random Button", () => {
  render(<NavBar buttonText="Random" />);
  const button = screen.getByText("Random");
  expect(button).toBeInTheDocument();
});

test("Renders Image Logo", () => {
  render(<NavBar />);
  const image = screen.getByAltText("logo");
  expect(image).toBeInTheDocument();
});
