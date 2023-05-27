import type { PropsWithChildren } from "react";

import type { ResponsiveStyles } from "../components";
import { useMapStylesToScreens } from "../hook";

export interface BoxProps {
  responsiveStyles: ResponsiveStyles;
}

export const Box = ({
  responsiveStyles,
  children,
}: PropsWithChildren<BoxProps>) => {
  const { large, medium, small } = useMapStylesToScreens(responsiveStyles);

  return <div style={{ ...large, ...medium, ...small }}>{children}</div>;
};
