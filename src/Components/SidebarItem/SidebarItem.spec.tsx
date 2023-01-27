import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import SidebarItem from ".";

test("Renders SidebarItem component", () => {
  render(
    <SidebarItem
      title={"First placemark"}
      id={"123"}
      onClick={() => {}}
      reference={null}
    />
  );
  const list = screen.getByRole<HTMLLIElement>("listitem");
  const span = screen.getByText<HTMLSpanElement>(/First placemark/i)
  const icon = screen.getByAltText<HTMLImageElement>('remove')
  expect(list).toBeInTheDocument();
  expect(span).toBeInTheDocument()
  expect(icon).toBeInTheDocument()
});
