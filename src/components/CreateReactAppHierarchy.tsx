import type { IBlock } from ".";
import { BlockTree } from "./BlockTree";

interface CreateReactAppHierarchyProps {
  blocks: IBlock[];
}

export const CreateReactAppHierarchy = ({
  blocks,
}: CreateReactAppHierarchyProps) => {
  const components = BlockTree({ blocks });
  return <div>{components}</div>;
};
