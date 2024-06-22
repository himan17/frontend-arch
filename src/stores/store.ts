import { Store, configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";

export const store: Store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
