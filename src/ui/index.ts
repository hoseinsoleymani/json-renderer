import { BlockTree } from "../components/BlockTree";
import { Box } from "./Box";
import { Button } from "./Button";
import { Column } from "./Column";
import { Image } from "./Image";
import { Section } from "./Section";
import { Text } from "./Text";

export type BlockType =
  | "box"
  | "button"
  | "columns"
  | "image"
  | "section"
  | "text";

export const JSONComponents: Record<BlockType, any> = {
  box: Box,
  section: Section,
  columns: Column,
  button: Button,
  text: Text,
  image: Image,
};

export const JSONComponentsProps: Partial<
  Record<BlockType, Record<string, React.FC<any>>>
> = {
  columns: { Component: BlockTree },
};

export * from "./Box";
export * from "./Button";
export * from "./Column";
export * from "./Image";
export * from "./Section";
export * from "./Text";
