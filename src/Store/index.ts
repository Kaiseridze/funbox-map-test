import { configureStore, combineReducers } from "@reduxjs/toolkit";
import placemarkSlice from "./Reducers/placemarkSlice";

const rootReducer = combineReducers({
  placemarks: placemarkSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState["dispatch"];
