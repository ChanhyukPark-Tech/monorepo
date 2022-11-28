import { Button } from "ui";
import type ASD from "./index.types";

export default function Web() {
  const asd: ASD = {
    dummy: "asd",
  };
  console.log(asd);

  return (
    <div>
      {["1", "2", "3"].map((item) => (
        <div>{item}</div>
      ))}
      <Button />
    </div>
  );
}
