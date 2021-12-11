import { Button } from "ui"
import { hello } from "hello"
import { useEffect } from "react";

export default function Web() {
	useEffect(() => {
		hello()
	}, [])
  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
