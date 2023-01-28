import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Container from "./index";

describe("Container tests", () => {
  it("Render Container component with children", () => {
    render(
      <Container variant="l" display="block">
        <div data-testid="container__inner-test" className="children"></div>
      </Container>
    );

    const container = screen.getByTestId("container-test");
    const containerInner = screen.getByTestId("container__inner-test");
    expect(container).toBeInTheDocument();
    expect(containerInner).toBeInTheDocument();
  });
});
