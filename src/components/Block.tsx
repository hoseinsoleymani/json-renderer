import type * as CSS from "csstype";

import type {
  BlockType,
  BoxProps,
  ButtonProps,
  ColumnProps,
  ImageProps,
  SectionProps,
  TextProps,
} from "../ui/index";
import { JSONComponents, JSONComponentsProps } from "../ui/index";

export type Options =
  | BoxProps
  | ButtonProps
  | ColumnProps
  | ImageProps
  | SectionProps
  | TextProps;

export interface ResponsiveStyles {
  large?: CSS.Properties;
  medium?: CSS.Properties;
  small?: CSS.Properties;
}

export interface IBlock {
  id: string;
  component: {
    type: BlockType;
    options: Options;
  };
  children?: IBlock[];
  responsiveStyles: ResponsiveStyles;
}

interface BlockProps {
  type: BlockType;
  options: Options;
  children?: React.ReactNode;
  responsiveStyles: ResponsiveStyles;
}

export const Block = ({
  type,
  options,
  children,
  responsiveStyles,
}: BlockProps) => {
  const Component = JSONComponents[type];
  const extraProps = JSONComponentsProps[type];
  return (
    <Component {...options} {...extraProps} responsiveStyles={responsiveStyles}>
      {children}
    </Component>
  );
};
