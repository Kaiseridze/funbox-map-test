import "@testing-library/jest-dom";
import reorderList from "../ReorderList";

test("Reorder list in array of objects", () => {
  const startIndex = 0;
  const endIndex = 3;

  const initArray = [
    { title: "One", id: "1vxcvdrwer", coordinates: [1, 2] },
    { title: "Two", id: "12dfs342", coordinates: [1, 2] },
    { title: "Three", id: "123321", coordinates: [1, 2] },
  ];

  const expectedArray = [
    { title: "Two", id: "12dfs342", coordinates: [1, 2] },
    { title: "Three", id: "123321", coordinates: [1, 2] },
    { title: "One", id: "1vxcvdrwer", coordinates: [1, 2] },
  ];

  for (let i = 0; i < expectedArray.length; i++) {
    expect(reorderList(initArray, startIndex, endIndex)[i]).toMatchObject(
      expectedArray[i]
    );
  }
});
