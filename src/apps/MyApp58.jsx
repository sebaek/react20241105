import React from "react";
import { Button } from "../components/ui/button.jsx";
import axios from "axios";

function MyApp58(props) {
  return (
    <div>
      <Button>btn3</Button>
      {/* /hello 로  address는 "신촌", city 는 "서울" get 요청 전송*/}
      <Button
        onClick={() => {
          axios.get("/hello", {
            params: {
              address: "신촌",
              city: "서울",
            },
          });
        }}
      >
        btn2
      </Button>
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
