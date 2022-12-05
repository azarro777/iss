import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IPeople from "../../utils/interfaces/IPeople.interface";
import { fetchPeopleInSpace } from "./actionCreators";

const initialState: IPeople = {
  message: "",
  number: 0,
  people: [],
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPeopleInSpace.pending.type, (state) => {});
    builder.addCase(fetchPeopleInSpace.fulfilled.type, (state, action: PayloadAction<IPeople>) => {
      state.message = action.payload.message;
      state.number = action.payload.number;
      state.people = action.payload.people;
    });
  },
});

export default peopleSlice.reducer;
