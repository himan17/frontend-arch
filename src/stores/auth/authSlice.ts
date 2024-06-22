import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/api";
import { AuthSlice } from "../../types/store";

// Define the initial state using that type
const initialState: AuthSlice = {
  isAuth: false,
  fetched: false,
};

export const authSlice = createSlice({
  name: "userauth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setFetched: (state, action: PayloadAction<boolean>) => {
      state.fetched = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { setAuth, setFetched, setUser } = authSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default authSlice.reducer;
