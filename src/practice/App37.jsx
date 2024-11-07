import React, { useState } from "react";
import { Input } from "@chakra-ui/react";

function App37(props) {
  const [text, setText] = useState("");

  return (
    <div>
      <Input onKeyUp={(e) => setText(e.target.value)} />
      <p>{text}</p>
    </div>
  );
}

export default App37;
