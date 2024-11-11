import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp58(props) {
  return (
    <div>
      {/* /hello 로  address는 "신촌", city 는 "서울" get 요청 전송*/}
      <Button onClick={() => {}}>btn2</Button>
      <Button
        onClick={() => {
          axios.get("/hi", {
            params: {
              name: "son",
              age: 5,
            },
          });
        }}
      >
        btn1
      </Button>
    </div>
  );
}

export default MyApp58;
