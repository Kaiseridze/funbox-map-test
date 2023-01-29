import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Input from "./index";
import userEvent from "@testing-library/user-event";

describe("Input test", () => {
  it("Renders Input component", () => {
    render(<Input onChange={() => {}} value="" />);
    const input = screen.getByRole<HTMLInputElement>("textbox");

    expect(input).toBeInTheDocument();
  });

  it("Renders Input component with value", () => {
    render(<Input onChange={() => {}} value="testValue" />);
    const input = screen.getByRole<HTMLInputElement>("textbox");

    expect(input.value).toBe("testValue");
  });

  it("Renders Input component without value", () => {
    render(<Input onChange={() => {}} value="" />);
    const input = screen.getByRole<HTMLInputElement>("textbox");

    expect(input.value).toBe("");
  });

  it("Simulate user input", async () => {
    render(<Input onChange={() => {}} />);
    const input = screen.getByRole<HTMLInputElement>("textbox");
    await userEvent.type(input, "Hello, World!");

    expect(input).toHaveValue("Hello, World!");
  });
});
