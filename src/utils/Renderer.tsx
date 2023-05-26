import type { ReactElement, ReactNode } from "react";
import React from "react";

// import {
//   Box,
//   Button,
//   Column,
//   Image,
//   Section,
//   Text,
// } from "../components/shared";
// import type { NestedChildren, ReactAppData } from "../models";

export function renderer({ blocks }: { blocks: any[] }): ReactNode[] {
  // eslint-disable-next-line complexity
  return blocks.map((block) => {
    const componentType = block.component?.type;
    const componentOptions = block.component?.options;
    const children = block.children;

    // eslint-disable-next-line fp/no-let
    let component: ReactElement | null = null;

    switch (componentType) {
      case "section":
        component = <section style={componentOptions} />;
        break;
      case "box":
        component = <div style={componentOptions} />;
        break;
      case "columns":
        component = <div style={componentOptions} />;
        break;
      case "button":
        component = (
          <button style={componentOptions}>
            {componentOptions.text as ReactNode}
          </button>
        );
        break;
      case "text":
        component = (
          <p style={componentOptions}>{componentOptions.text as ReactNode}</p>
        );
        break;
      case "image":
        component = (
          <img
            style={componentOptions}
            src={componentOptions.image as string}
            alt="d"
          />
        );
        break;
      default:
        break;
    }

    if (children?.length > 0 && component) {
      const childComponents = renderer({ blocks: children });
      component = React.cloneElement(component, {}, childComponents);
    }

    if (block.component?.options) {
      if (block.component.options.columns) {
        if (block.component.options.columns?.length > 0 && component) {
          const childComponents = renderer({
            blocks: block.component.options.columns,
          });
          component = React.cloneElement(component, {}, childComponents);
        }
      }
    }

    if (block.blocks?.length > 0 && component) {
      const childComponents = renderer({
        blocks: block.blocks,
      });
      component = React.cloneElement(component, {}, childComponents);
    }

    if (block.children?.length > 0 && component) {
      const childComponents = renderer({
        blocks: block.children,
      });
      component = React.cloneElement(component, {}, childComponents);
    }

    const responsiveStyles = block.responsiveStyles;

    if (responsiveStyles) {
      // Apply styles based on screen size
    }

    return component;
  });
}

// import type { ReactElement, ReactNode } from "react";
// import React from "react";

// import {
//   Box,
//   Button,
//   Column,
//   Image,
//   Section,
//   Text,
// } from "../components/shared";
// import type { NestedChildren, ReactAppData } from "../models";

// export function renderer({
//   blocks,
// }: {
//   blocks: ReactAppData["blocks"];
// }): ReactNode[] {

//   return blocks.map((block) => {
//     const componentType = block.component.type;
//     const componentOptions = block.component.options;
//     const children = block.children;

//     let component: ReactElement | null = null;

//     switch (componentType) {
//       case "section":
//         component = <Section options={componentOptions} />;
//         break;
//       case "box":
//         component = <Box options={componentOptions} />;
//         break;
//       case "columns":
//         component = <Column options={componentOptions} />;
//         break;
//       case "button":
//         component = (
//           <Button options={componentOptions}>
//             {componentOptions!.text as ReactNode}
//           </Button>
//         );
//         break;
//       case "text":
//         component = (
//           <Text options={componentOptions}>
//             {componentOptions!.text as ReactNode}
//           </Text>
//         );
//         break;
//       case "image":
//         component = (
//           <Image
//             options={componentOptions}
//             // src={componentOptions!.image as string}
//             // alt="d"
//           />
//         );
//         break;
//       default:
//         break;
//     }

//     if (children.length > 0 && component) {
//       const childComponents = renderer({ blocks: children });
//       component = React.cloneElement(component, {}, childComponents);
//     }

//     const responsiveStyles = block.responsiveStyles;

//     if (responsiveStyles) {
//       // Apply styles based on screen size
//     }

//     return component;
//   });
// }
