import { combineReducers, configureStore } from "@reduxjs/toolkit";
import locationSlice from "./reducer/locationReducer";
import peopleSlice from "./reducer/peopleReducer";

const rootReducer = combineReducers({
  locationSlice,
  peopleSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
