import "@testing-library/jest-dom";
import placemarkSlice, {
  addPlacemark,
  removePlacemark,
  updatePlacemarkState,
} from "../index";

describe("placemarkSlice tests", () => {
  it("Return placemarkSlice state without data", () => {
    const result = placemarkSlice(undefined, { type: "" });

    const mockState = {
      placemarks: [],
    };

    expect(result).toEqual(mockState);
  });

  it('Should add new placemark to placemarkSlice state on action "addPlacemark"', () => {
    const mockState = {
      placemarks: [],
    };
    const payload = { title: "One", id: "1vxcvdrwer", coordinates: [1, 2] };
    const action = { type: addPlacemark.type, payload };
    const result = placemarkSlice(mockState, action);
    expect(result.placemarks[0].title).toBe("One");
  });

  it('Should remove a placemark from placemarkSlice state on action "removePlacemark"', () => {
    const mockState = {
      placemarks: [{ title: "One", id: "1vxcvdrwer", coordinates: [1, 2] }],
    };
    const action = { type: removePlacemark.type, payload: "1vxcvdrwer" };
    const result = placemarkSlice(mockState, action);

    expect(result.placemarks).toEqual([]);
  });

  it('Should update state in placemarkSlice on action "updatePlacemarkState"', () => {
    const mockState = {
      placemarks: [{ title: "One", id: "1vxcvdrwer", coordinates: [1, 2] }],
    };
    const newStatePayload = { title: "Three", id: "1gfcvbcvbr", coordinates: [2, 5] }
    const action = { type: updatePlacemarkState.type, payload: newStatePayload };
    const result = placemarkSlice(mockState, action);

    expect(result.placemarks).toEqual(newStatePayload)
  });
});
