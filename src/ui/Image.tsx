import type { ResponsiveStyles } from "../components";
import { useMapStylesToScreens } from "../hook";

export interface ImageProps {
  image: string;
  backgroundPosition: string;
  backgroundSize: string;
  aspectRatio: number;
  lazy: boolean;
  sizes: string;
  responsiveStyles: ResponsiveStyles;
}

export const Image = ({
  image,
  lazy,
  responsiveStyles,
  ...styles
}: ImageProps) => {
  const { large, medium, small } = useMapStylesToScreens(responsiveStyles);

  return (
    <img
      src={image}
      style={{ ...styles, ...large, ...medium, ...small }}
      loading={lazy ? "lazy" : "eager"}
      alt="Banner"
    />
  );
};
