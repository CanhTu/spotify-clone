import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TokenState } from "../../types/typesAndInterfaces.ts";

const initialState: TokenState = {
  token: null,
};

const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
  },
});

export const { setToken } = tokenSlice.actions;
export default tokenSlice.reducer;