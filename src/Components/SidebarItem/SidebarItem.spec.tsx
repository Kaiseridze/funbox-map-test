import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as reduxHooks from "react-redux";
import * as actions from "../../Store/Reducers/placemarkSlice";

import SidebarItem from ".";

jest.mock("react-redux");

const mockedDispatch = jest.spyOn(reduxHooks, "useDispatch");

test("Renders SidebarItem component", () => {
  render(
    <SidebarItem
      title={"First placemark"}
      id={"123"}
      onClick={() => {}}
      reference={null}
    />
  );
  const listItem = screen.getByRole<HTMLLIElement>("listitem");
  const span = screen.getByText<HTMLSpanElement>(/First placemark/i);
  const icon = screen.getByAltText<HTMLImageElement>("remove");
  expect(listItem).toBeInTheDocument();
  expect(span).toBeInTheDocument();
  expect(icon).toBeInTheDocument();
});

test("Remove SidebarItem component on dispatch", () => {
  const dispatch = jest.fn();
  mockedDispatch.mockReturnValue(dispatch);
  render(
    <SidebarItem
      title={"First placemark"}
      id={"123"}
      onClick={() => dispatch()}
      reference={null}
    />
  );
  const removeSvg = screen.getByAltText("remove");

  fireEvent.click(removeSvg);
  expect(dispatch).toHaveBeenCalledTimes(1);
});
