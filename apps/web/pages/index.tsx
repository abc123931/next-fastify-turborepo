import { Button } from "ui";
import { useEffect } from "react";
import type { Response } from "@next-fastify-turborepo/schemas";

export default function Web() {
  useEffect(() => {
    const ping = async () => {
      const res = await fetch("http://localhost:8080/ping");
      const json = (await res.json()) as Response;
      console.log({ message: json.message });
    };
    ping();
  }, []);
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
