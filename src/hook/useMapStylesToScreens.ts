import { useMediaQuery } from "react-responsive";

import type { ResponsiveStyles } from "../components";

export function useMapStylesToScreens(styles: ResponsiveStyles) {
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const isSmallScreen = useMediaQuery({
    query: "(min-width: 0)",
  });

  return {
    large: styles.large,
    medium: isMediumScreen || isSmallScreen ? styles.medium : {},
    small: isSmallScreen ? styles.small : {},
  };
}
