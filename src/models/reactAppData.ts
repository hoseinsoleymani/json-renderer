export interface ReactAppData {
  title: string;
  blocks: Block[];
  url: string;
}

interface Block {
  id: string;
  component: Component;
  children: Children[];
  responsiveStyles: ResponsiveStyles;
}

interface Component {
  type: string;
  options?: Record<any, unknown>;
}

interface Children {
  component: Component;
  id: string;
  responsiveStyles: ResponsiveStyles;
  children?: NestedChildren[];
}

export interface NestedChildren {
  component: Component;
  id: string;
  responsiveStyles: ResponsiveStyles;
}

interface ResponsiveStyles {
  large?: Record<any, unknown>;
  medium?: Record<any, unknown>;
  small?: Record<any, unknown>;
}
