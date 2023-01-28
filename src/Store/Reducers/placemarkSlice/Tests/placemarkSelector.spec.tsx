import "@testing-library/jest-dom";
import { IPlacemark } from "../placemarkSlice.types";
const placemarkSelector = (state: { placemarks: IPlacemark[] }) =>
  state.placemarks;

test("Redux selector performance", () => {
  const placemarks = [
    { title: "One", id: "1vxcvdrwer", coordinates: [1, 2] },
    { title: "Two", id: "12dfs342", coordinates: [1, 2] },
    { title: "Three", id: "123321", coordinates: [1, 2] },
  ];

  const result = placemarkSelector({ placemarks });

  expect(result).toEqual(placemarks);
});
