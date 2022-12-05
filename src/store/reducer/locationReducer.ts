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
  scriptLoaded: false,
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    script: (state) => {
      state.scriptLoaded = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchIissCoords.pending.type, (state) => {});
    builder.addCase(fetchIissCoords.fulfilled.type, (state, action: PayloadAction<ICoordsObj>) => {
      state.coords = action.payload;
    });
    builder.addCase(fetchIissCoords.rejected.type, (state, action: PayloadAction) => {});
  },
});

export const {script} = locationSlice.actions;
export default locationSlice.reducer;
