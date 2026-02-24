import { createRoot } from "react-dom/client";
import App from "./app/App";
import { StrictMode } from "react";
import { BrowserRouter } from "react-router";
import { Provider } from "./components/ui/provider";
import { AuthProvider } from "./features/auth";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
