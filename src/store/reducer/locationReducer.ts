import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ICoordsObj from "../../utils/interfaces/ICoords.interface";
import IIss from "../../utils/interfaces/IIss.interface";
import { fetchIissCoords } from "./actionCreators";

const initialState: IIss = {
  coords: {
    message: "",
    timestamp: 0,
    iss_position: {
      latitude: "",
      longitude: "",
    },
  },
  isLoading: false,
  error: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchIissCoords.pending.type, (state) => {
      console.log("loading"); //! LOading feature!
    });
    builder.addCase(fetchIissCoords.fulfilled.type, (state, action: PayloadAction<ICoordsObj>) => {
      state.coords = action.payload;
      console.log("fullfiled", state, action.payload); //! Console log!
    });
    builder.addCase(fetchIissCoords.rejected.type, (state, action: PayloadAction) => {
      console.log("error", action.payload); //! Console log!
    });
  },
});

export default locationSlice.reducer;
