import { AuthResponse } from "../types/api";
import api from "./api-client";

const getUser = async (): Promise<AuthResponse> => {
  return (await api.post("/users/auth/me")).data;
};

export const validateUserLogin = async () => {
  try {
    const authResponse = await getUser();

    return authResponse;
  } catch (er) {
    return { success: false, errorMsg: "unknown error occured", user: null };
  }
};
