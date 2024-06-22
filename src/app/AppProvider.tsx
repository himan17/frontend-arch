import { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "../stores/store";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <Suspense
      fallback={
        <div className="flex h-screen w-screen items-center justify-center">
          <p>Loading...</p>
        </div>
      }
    >
      <Provider store={store}>{children}</Provider>
    </Suspense>
  );
};
