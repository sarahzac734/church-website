import { Button, Html } from "@react-email/components";
import * as React from "react";

interface EmailProps {
  firstName: string;
}

export default function Email({ firstName}: EmailProps) {
  return (
    <Html>
      <Button
        href="https://example.com"
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Hello {firstName}
      </Button>
    </Html>
  );
}