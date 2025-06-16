import React from "react";
import { screen, render } from "@testing-library/react";
import { test, expect } from "@jest/globals";
import Card from "./ACard.js";
import userEvent from "@testing-library/user-event";

test("Testing for onClick", () => {
  const onClick = jest.fn(); // Mock Function
  const { container } = render(<Card onClick={onClick} />);
  const element = container.querySelector("div");
  expect(element).toBeTruthy();
  userEvent.click(element);
  expect(onClick).toBeCalled();
});
