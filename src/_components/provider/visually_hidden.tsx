import * as React from "react";
import * as VisuallyHiddenProvider from "@radix-ui/react-visually-hidden";

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <VisuallyHiddenProvider.Root>{children}</VisuallyHiddenProvider.Root>;
}
