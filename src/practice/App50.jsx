import React, { useState } from "react";
import { Field } from "../components/ui/field.jsx";
import { Box, Input } from "@chakra-ui/react";

function MyBox2({ user }) {
  return (
    <Box>
      <p>이름 : {user.name}</p>
      <p>이메일 : {user.email}</p>
    </Box>
  );
}
function MyBox1({ user }) {
  return <MyBox2 user={user} />;
}
function App50(props) {
  const [user, setUser] = useState({ name: "", email: "" });
  return (
    <div>
      <Field label={"이름"}>
        <Input onChange={(e) => setUser({ ...user, name: e.target.value })} />
      </Field>
      <Field label={"이메일"}>
        <Input onChange={(e) => setUser({ ...user, email: e.target.value })} />
      </Field>
      <MyBox1 user={user} />
    </div>
  );
}

export default App50;
