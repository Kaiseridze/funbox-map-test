import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as reduxHooks from "react-redux";

import Sidebar from "./index";

jest.mock("react-redux");
jest.mock("@hello-pangea/dnd", () => ({
  Droppable: ({ children }: any) =>
    children(
      {
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {}
    ),
  Draggable: ({ children }: any) =>
    children(
      {
        draggableProps: {
          style: {},
        },
        innerRef: jest.fn(),
      },
      {}
    ),
  DragDropContext: ({ children }: any) => children,
}));

const placemarks = [
  {
    title: "Point 1",
    id: "9701338e-d18d-c145-37eb-52f79a60302f",
    coordinates: [59.93431286622302, 30.31946594757369],
  },
  {
    title: "Point 2",
    id: "da9ce675-55db-60cd-e198-d7c5e9e91c2c",
    coordinates: [59.94878231678153, 30.356888127748764],
  },
  {
    title: "Point 3",
    id: "f4fed4e1-790a-d3c4-88a9-bbf4a305339d",
    coordinates: [59.93431286622302, 30.31946594757369],
  },
];

const mockedSelector = jest.spyOn(reduxHooks, "useSelector");

describe("Sidebar tests", () => {
  it("Renders Sidebar component without items", () => {
    mockedSelector.mockReturnValue([]);
    render(<Sidebar mapCenter={[55.12, 55.12]} />);
    const mainBlock = screen.getByTestId("sidebar-test");
    const headerBlock = screen.getByText(/Добавьте/i);
    expect(mainBlock).toBeInTheDocument();
    expect(headerBlock).toBeInTheDocument();
  });

  it("Renders Sidebar component with items", () => {
    mockedSelector.mockReturnValue(placemarks);
    render(<Sidebar mapCenter={[55.12, 55.12]} />);
    const mainBlock = screen.getByTestId("sidebar-test");
    const headerBlock = screen.getByText(/Добавьте/i);
    const list = screen.getByRole("list");

    expect(mainBlock).toBeInTheDocument();
    expect(headerBlock).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });
});
