import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Input from "./index";
import userEvent from "@testing-library/user-event";

test("Renders Input component", () => {
  render(<Input onChange={() => {}} value="" />);
  const input = screen.getByRole<HTMLInputElement>("textbox");

  expect(input).toBeInTheDocument();
});

test("Renders Input component with value", () => {
  render(<Input onChange={() => {}} value="testValue" />);
  const input = screen.getByRole<HTMLInputElement>("textbox");

  expect(input.value).toBe("testValue");
});

test("Renders Input component without value", () => {
  render(<Input onChange={() => {}} value="" />);
  const input = screen.getByRole<HTMLInputElement>("textbox");

  expect(input.value).toBe("");
});

