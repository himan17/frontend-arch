import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AuthFailure from "../pages/AuthFailure";
import Loader from "../pages/Loader";
import { useQuery } from "@tanstack/react-query";
import { validateUserLogin } from "../../lib/auth";
import { setAuth, setFetched } from "../../stores/auth/authSlice";
import { useAppDispatch } from "../../hooks/hook";
import { Layout } from "../../shared/components/ui/Layout";

export const Router = () => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, data } = useQuery({
    queryKey: ["users", "auth", "me"],
    queryFn: validateUserLogin,
    retry: false,
  });
  if (!isLoading) {
    dispatch(setFetched(true));
  }
  if (!isError && data?.success) {
    dispatch(setAuth(true));
  }
  if (isError || !data?.success) {
    dispatch(setAuth(false));
  }
  console.log(isLoading, isError, data);

  return (
    <>
      {!isLoading && !isError && data?.success ? (
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="*" element={<Navigate to="/home" replace />}></Route>
            </Routes>
          </Layout>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/auth-failure" element={<AuthFailure />} />
            <Route
              path="*"
              element={
                <Loader
                  isLoading={isLoading}
                  isSuccess={!isError && data !== undefined && data.success}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
};
