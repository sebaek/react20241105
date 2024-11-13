import React, { useState } from "react";

function App70(props) {
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type={"text"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input type="file" multiple />
      <br />
      <button>전송</button>
    </div>
  );
}

export default App70;
