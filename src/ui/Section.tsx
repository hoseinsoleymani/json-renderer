import type { ResponsiveStyles } from "../components";
import { useMapStylesToScreens } from "../hook";

export interface SectionProps {
  children: React.ReactNode;
  responsiveStyles: ResponsiveStyles;
  maxWidth: number;
}

export const Section = ({
  children,
  responsiveStyles,
  ...styles
}: SectionProps) => {
  const { large, medium, small } = useMapStylesToScreens(responsiveStyles);

  return (
    <section style={{ ...styles, ...large, ...medium, ...small }}>
      {children}
    </section>
  );
};
