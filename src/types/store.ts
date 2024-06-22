import { store } from "../stores/store";
import { User } from "./api";

// Define a type for the slice state
export interface AuthSlice {
  isAuth: boolean;
  fetched: boolean;
  user?: User;
}

export interface RootState {
  auth: AuthSlice;
}

export type AppDispatch = typeof store.dispatch;
