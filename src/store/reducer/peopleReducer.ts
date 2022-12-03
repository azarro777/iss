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
    builder.addCase(fetchPeopleInSpace.pending.type, (state) => {
      console.log('loading'); //!Loading feture Console log!
    });
    builder.addCase(fetchPeopleInSpace.fulfilled.type, (state, action: PayloadAction<IPeople>) => {
      state.message = action.payload.message;
      state.number = action.payload.number;
      state.people = action.payload.people;
      console.log('people in space',state,  action.payload); //! Console log!
      
    })
  },
});

export default peopleSlice.reducer;

// const initialState: IIss = {
//   coords: {
//     message: "",
//     timestamp: 0,
//     iss_position: {
//       latitude: "",
//       longitude: "",
//     },
//   },
//   isLoading: false,
//   error: "",
// };

// export const locationSlice = createSlice({
//   name: "location",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchIissCoords.pending.type, (state) => {
//       console.log("loading"); //! LOading feature!
//     });
//     builder.addCase(fetchIissCoords.fulfilled.type, (state, action: PayloadAction<ICoordsObj>) => {
//       state.coords = action.payload;
//       console.log("fullfiled", state, action.payload); //! Console log!
//     });
//     builder.addCase(fetchIissCoords.rejected.type, (state, action: PayloadAction) => {
//       console.log("error", action.payload); //! Console log!
//     });
//   },
// });

// export default locationSlice.reducer;