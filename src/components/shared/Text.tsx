import type { PropsWithChildren } from "react";

interface TextProps {
  options: Record<string, unknown>;
}

export const Text = ({ options, children }: PropsWithChildren<TextProps>) => {
  return <p>{children}</p>;
};
