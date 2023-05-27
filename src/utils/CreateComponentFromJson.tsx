import type { ReactNode } from "react";
import { Fragment } from "react";

import {
  Box,
  Button,
  Column,
  Image,
  Section,
  Text,
} from "../components/shared";
import type { NestedChildren, ReactAppData } from "../models";

export function CreateComponentFromJson({ blocks }: { blocks: any[] }): any {
  return blocks.map((block) => {

    const componentType = block.component?.type;
    const componentOptions = block.component?.options;
    const children = block.children;

    const Component = getComponent(componentType);

    if (children) {
      return (
        <Component key={block.id} options={componentOptions}>
          <CreateComponentFromJson blocks={children} />
        </Component>
      );
    }

    if (componentOptions?.columns?.length > 0) {
      return (
        <Component key={block.id} options={componentOptions}>
          {componentOptions.columns.map((column) => (
            <CreateComponentFromJson key={column.id} blocks={column.blocks} />
          ))}
        </Component>
      );
    }

    const responsiveStyles = block.responsiveStyles;

    return <Component key={block.id} options={componentOptions} />;
  });
}

const components = {
  box: Box,
  section: Section,
  column: Column,
  button: Button,
  text: Text,
  image: Image,
};

function getComponent(componentType: string) {
  return components[componentType];
}

//  =======================================================================================

// const ParseTag = ({
//   tagName,
//   children,
// }: {
//   tagName: string;
//   children: ReactNode;
// }) => {
//   switch (tagName) {
//     case "box":
//       return <Box>{children}</Box>;
//     case "section":
//       return <Section>{children}</Section>;
//     case "column":
//       return <Column>{children}</Column>;
//     case "button":
//       return <Button>{children}</Button>;
//     case "text":
//       return <Text>{children}</Text>;
//     case "image":
//       return <Image>{children}</Image>;
//     default:
//       return <div>{children}</div>;
//   }
// };

// export const CreateComponentFromJson = ({ block }) => {
//   const componentType = block?.component?.type;
//   const componentOptions = block?.component?.options;
//   const children = block?.children;

//   return (
//     <>
//       <ParseTag tagName={componentType}>
//         {block?.children?.map((item) => {
//           return <CreateComponentFromJson key={item.id} block={item} />;
//         })}
//       </ParseTag>

//       <ParseTag tagName={componentType}>
//         {block.component?.options?.columns?.map((column) => (
//           <CreateComponentFromJson key={column.id} block={column} />
//         ))}
//       </ParseTag>
//     </>
//   );
// };


// }
