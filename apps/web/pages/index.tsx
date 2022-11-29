import Image from "next/image";
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
      <Image
        src="https://images.unsplash.com/photo-1638913662180-afc4334cf422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        width={828}
        height={588}
      />
    </div>
  );
}
