import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "./components/ui/provider.jsx";
import { Toaster } from "./components/ui/toaster.jsx";
import MyApp50 from "./apps/MyApp50.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider>
    <MyApp50 />
    <Toaster />
  </Provider>,
  // </StrictMode>,
);
