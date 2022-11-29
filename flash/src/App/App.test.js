import { render, screen } from "@testing-library/react";
import App from "./App";
jest.mock('axios'); // This overwrites axios methods with jest Mock
import axios from 'axios';

test('renders the app', () => {
  render(<App />);
});
