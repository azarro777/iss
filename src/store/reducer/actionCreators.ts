import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIissCoords = createAsyncThunk("location/fetchIissCoords", () => {
  return axios.get("http://api.open-notify.org/iss-now.json").then((response) => response.data);
});

export const fetchPeopleInSpace = createAsyncThunk("people/fetchPeopleInSpace", () => {
  return axios.get("http://api.open-notify.org/astros.json").then((responce) => responce.data);
});
