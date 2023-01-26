import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Input from "./index";

test("Renders input component", () => {
  render(<Input onChange={() => {}} value="" />);
  const input = screen.getByRole<HTMLInputElement>("textbox");

  expect(input).toBeInTheDocument();
});

test("Renders input component with value", () => {
  render(<Input onChange={() => {}} value="testValue" />);
  const input = screen.getByRole<HTMLInputElement>("textbox");

  expect(input.value).toBe("testValue");
});

test("Renders input component without value", () => {
  render(<Input onChange={() => {}} value="" />);
  const input = screen.getByRole<HTMLInputElement>("textbox");

  expect(input.value).toBe("");
});

