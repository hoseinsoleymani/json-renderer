import type { PropsWithChildren } from "react";

interface ButtonProps {
  options: Record<string, unknown>;
}

export const Button = ({
  options,
  children,
}: PropsWithChildren<ButtonProps>) => {
  return <button>{children}</button>;
};
