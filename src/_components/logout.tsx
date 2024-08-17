"use client";

import { Button } from "./ui/button";

interface LogoutProps {
  action: () => Promise<void>;
}

export default function Logout({ action }: LogoutProps) {
  return (
    <form action={action}>
      <Button type="submit">Sign Out</Button>
    </form>
  );
}
