import { Button } from "ui";
import { Adder } from "utils";

export default function Web() {
  return (
    <div>
      <h1>{Adder(4, 124)}</h1>
      <Button />
    </div>
  );
}
