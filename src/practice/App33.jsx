import React from "react";
import { Input, Textarea } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

function App33(props) {
  return (
    <div>
      {/* input에 keyup 이벤트 발생 시 로그로 메시지 출력 하도록 */}
      <Input />
      <hr />
      {/* 버튼이 클릭되면 로그로 메시지 출력 */}
      <Button>클릭</Button>
      <hr />
      {/* textarea에 mouseEnter, mouseLeave 이벤트 발생시 메시지 출력*/}
      <Textarea />
    </div>
  );
}

export default App33;
