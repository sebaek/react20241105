import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";
import {
  NumberInputField,
  NumberInputRoot,
} from "../components/ui/number-input.jsx";

function App60(props) {
  const [price, setPrice] = useState(1000);

  return (
    <div>
      <Field label={"제목"}>
        <Input />
      </Field>
      <Field label={"내용"}>
        <Textarea />
      </Field>
      <Field label={"가격"}>
        <NumberInputRoot value={price} onValueChange={(e) => setPrice(e.value)}>
          <NumberInputField />
        </NumberInputRoot>
      </Field>
      <Button>전송</Button>
    </div>
  );
}

export default App60;
