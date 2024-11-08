import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import App46 from "./practice/App46.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <App46 />
    <Toaster />
  </Provider>,
  // </StrictMode>,
);
