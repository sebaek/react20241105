import React, { useState } from "react";
import { Button } from "../components/ui/button.jsx";
import { Box } from "@chakra-ui/react";

function MyComp1() {
  return <MyButton />;
}
function MyButton() {
  const [count, setCount] = useState(0);
  return <Button onClick={() => setCount(count + 1)}>count : {count}</Button>;
}
function MyBox() {
  const count = 0;
  return <Box>in box : {count}</Box>;
}
function MyComp2() {
  return <MyBox />;
}
function App51(props) {
  return (
    <div>
      <MyComp1 />
      <MyComp2 />
    </div>
  );
}

export default App51;
