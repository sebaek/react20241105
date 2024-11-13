import React from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

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
function HomeContent() {
  return <Box>홈 페이지 컨텐츠</Box>;
}
function SubContent1() {
  return <Box> 서브 페이지 1 !!!!!</Box>;
}

function SubContent2() {
  return <Box> 서브 페이지 2 @@@@@</Box>;
}
function Navbar() {
  const navigate = useNavigate();

  return (
    <Flex gap={5}>
      <Box onClick={() => navigate("/")}>HOME</Box>
      <Box onClick={() => navigate("/sub1")}>SUB1</Box>
      <Box onClick={() => navigate("/sub2")}>SUB2</Box>
    </Flex>
  );
}
function RootPage() {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
}

function MyApp74(props) {
  return <RouterProvider router={router} />;
}

export default MyApp74;
