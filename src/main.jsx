import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App72 from "./practice/App72.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <App72 />
      <Toaster />
    </Provider>
  </StrictMode>,
);
