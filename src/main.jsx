import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App34 from "./practice/App34.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App34 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
