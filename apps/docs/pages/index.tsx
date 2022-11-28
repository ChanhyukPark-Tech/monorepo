import { Button } from "ui";

export default function Web() {
  return (
    <div>
      {["1", "2", "3"].map((item) => (
        <div>{item}</div>
      ))}
      <Button />
    </div>
  );
}
