import { IPlacemark } from "../Store/Reducers/placemarkSlice/placemarkSlice.types";

export default function reorderList(
  list: IPlacemark[],
  startIndex: number,
  endIndex: number
) {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}
