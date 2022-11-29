import Image from "next/image";
import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <Image
        src="https://images.unsplash.com/photo-1638913662180-afc4334cf422?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt=""
        width={828}
        height={588}
      />
      <Button />
    </div>
  );
}
