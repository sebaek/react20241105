import React from "react";
import { useImmer } from "use-immer";
import { Field } from "../components/ui/field.jsx";
import { Input } from "@chakra-ui/react";
import { Button } from "../components/ui/button.jsx";

const originInfo = { name: "홍길동", items: ["모니터", "CPU"] };
function App44(props) {
  const [info, updateInfo] = useImmer(originInfo);

  return (
    <div>
      <Field label={"이름"}>
        <Input
          value={info.name}
          onChange={(e) =>
            updateInfo((draft) => {
              draft.name = e.target.value;
            })
          }
        />
      </Field>
      <Button>키보드</Button>
      <Button>마우스</Button>
      <Button>핸드폰</Button>
      <Button variant={"surface"} colorPalette={"red"}>
        리셋
      </Button>
      <hr />
      <ul>
        {info.items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App44;
