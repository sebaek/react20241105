import React from "react";
import ca, { a, b, g as ga } from "./App13.jsx";
import cb, { d, e, g as gb } from "./App14.jsx";

// 13, 14 에 있는 export된 값들을 import 해서

// li 요소 8개로 출력
function App15(props) {
  return (
    <div>
      <li>{a}</li>
      <li>{b}</li>
      <li>{ga}</li>
      <li>{ca}</li>
      <li>{d}</li>
      <li>{e}</li>
      <li>{gb}</li>
      <li>{cb}</li>
    </div>
  );
}

export default App15;
