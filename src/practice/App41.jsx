import React from "react";
import { Field } from "../components/ui/field.jsx";
import { Input, Textarea } from "@chakra-ui/react";

function App41(props) {
  return (
    <div>
      <Field label={"제목"}>
        <Input />
      </Field>
      <Field label={"본문"}>
        <Textarea />
      </Field>
      <hr />
      <Field label={"제목"} readOnly>
        <Input value={book.title} />
      </Field>
      <Field label={"본문"} readOnly>
        <Textarea value={book.content} />
      </Field>
    </div>
  );
}

export default App41;
