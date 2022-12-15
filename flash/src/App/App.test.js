import { render, screen } from "@testing-library/react";
import App from "./App";
jest.mock("axios"); // This overwrites axios methods with jest Mock
import axios from "axios";
import NavBar from "../NavBar/NavBar";

test("renders the app", () => {
  render(<NavBar />);
});
