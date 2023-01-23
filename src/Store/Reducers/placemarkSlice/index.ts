import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStatePlacemarks, IPlacemark } from "./placemarkSlice.types";

const initialState: InitialStatePlacemarks = {
  placemarks: [],
};

const placemarkSlice = createSlice({
  name: "placemark",
  initialState,
  reducers: {
    addPlacemark(state, action: PayloadAction<IPlacemark>) {
      state.placemarks.push(action.payload);
    },
    removePlacemark(state, action) {
      state.placemarks = state.placemarks.filter((placemark) => placemark.id !== action.payload)
    },
  },
});

export const { addPlacemark, removePlacemark } = placemarkSlice.actions;
export default placemarkSlice.reducer;
