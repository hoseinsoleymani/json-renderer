import type { PropsWithChildren } from "react";

import type { ResponsiveStyles } from "../components";
import { useMapStylesToScreens } from "../hook";

export interface TextProps {
  text: React.ReactNode;
  responsiveStyles: ResponsiveStyles;
}

export const Text = ({
  text,
  responsiveStyles,
  ...styles
}: PropsWithChildren<TextProps>) => {
  const { large, medium, small } = useMapStylesToScreens(responsiveStyles);

  return <p style={{ ...styles, ...large, ...medium, ...small }}>{text}</p>;
};
