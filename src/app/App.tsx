import { Router } from "./router/routes";
import { AppProvider } from "./AppProvider";
import { AppCanvas } from "../shared/components/ui/AppCanvas";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { telegramWindow } from "../lib/telegram";

// react query client
const queryClient = new QueryClient();

// telegram mini app startup settings
telegramWindow.ready();
telegramWindow.expand();
telegramWindow.enableClosingConfirmation();

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <AppCanvas>
          <Router />
        </AppCanvas>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AppProvider>
  );
}

export default App;
