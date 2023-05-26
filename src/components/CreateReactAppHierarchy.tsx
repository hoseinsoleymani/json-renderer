import type { ReactAppData } from "../models";
import { renderer } from "../utils/Renderer";

export const CreateReactAppHierarchy = ({
  title,
  blocks,
  url,
}: ReactAppData) => {
  const components = renderer({ blocks });

  return <div> {components} </div>;
};
