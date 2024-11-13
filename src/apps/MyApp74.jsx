import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <HomeContent /> },
      {
        path: "sub1",
        element: <SubContent1 />,
      },
      {
        path: "sub2",
        element: <SubContent2 />,
      },
    ],
  },
]);

function MyApp74(props) {
  return <RouterProvider router={router} />;
}

export default MyApp74;
