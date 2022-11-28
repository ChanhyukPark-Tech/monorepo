import { Button } from "ui";
import { Adder } from "utils";

export default function Web() {
  return (
    <div>
      나는 찬혁이야.
      <h1>{Adder(4, 124)}</h1>
      {["1", "2", "3"].map((item) => (
        <div>{item}</div>
      ))}
      <Button />
    </div>
  );
}
