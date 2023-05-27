import type { ReactAppData } from "../models";
import { CreateComponentFromJson } from "../utils/CreateComponentFromJson";

export const CreateReactAppHierarchy = ({
  title,
  blocks,
  url,
}: ReactAppData) => {
  const components = CreateComponentFromJson({ blocks });
  return <div>{components}</div>;

  // ========================================

  // return blocks.map((block) => (
  //   <CreateComponentFromJson key={block.id} block={block} />
  // ));
};
