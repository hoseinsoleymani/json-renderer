import type { ResponsiveStyles } from "../components";
import { useMapStylesToScreens } from "../hook";

export interface ButtonProps {
  text: string;
  responsiveStyles: ResponsiveStyles;
}

export const Button = ({ text, responsiveStyles }: ButtonProps) => {
  const { large, medium, small } = useMapStylesToScreens(responsiveStyles);

  return <button style={{ ...large, ...medium, ...small }}>{text}</button>;
};
