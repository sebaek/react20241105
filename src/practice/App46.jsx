import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";

function Comp() {
  return (
    <div>
      <Box h={20} bg={"yellow.300"}></Box>
    </div>
  );
}

function App46(props) {
  return (
    <div>
      <Field label={"자기소개"}>
        <Input />
      </Field>
      <Comp />
    </div>
  );
}

export default App46;
