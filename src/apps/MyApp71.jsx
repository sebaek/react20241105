import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // /path3 으로 이동했을 때 어떤 컴포넌트 출력

// /path3 으로 이동했을 때 어떤 컴포넌트 출력
// /path4 으로 이동했을 때 어떤 컴포넌트 출력
// /path1/sub1 으로 이동했을 때 어떤 컴포넌트 출력
// /path1/sub2 으로 이동했을 때 어떤 컴포넌트 출력
const router = createBrowserRouter([
  { path: "/", element: <div>여기는 홈 페이지</div> },
  {
    path: "/path1",
    element: <div>여기는 1번 경로</div>,
  },
  {
    path: "/path2",
    element: <div>여기는 2번 경로</div>,
  },
]);

function MyApp71(props) {
  return <RouterProvider router={router} />;
}

export default MyApp71;
