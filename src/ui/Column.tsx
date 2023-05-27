import type { IBlock } from "../components";

export interface ColumnProps {
  Component: React.FC<{ blocks: IBlock[] }>;
  columns: {
    blocks?: IBlock[];
    space: string;
    stackColumnsAt: "tablet";
    reverseColumnsWhenStacked: boolean;
  }[];
}

export const Column = ({ columns, Component }: ColumnProps) => {
  return (
    <>
      {columns.map((column) => {
        return column.blocks?.map((block) =>
          Array.isArray(block.children) ? (
            <Component key={block.id} blocks={block.children} />
          ) : (
            <Component key={block.id} blocks={[block]} />
          )
        );
      })}
    </>
  );
};
