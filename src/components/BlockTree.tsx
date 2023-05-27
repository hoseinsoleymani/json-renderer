import type { ReactElement } from "react";
import React from "react";

import type { IBlock } from "./Block";
import { Block } from "./Block";

export const BlockTree = ({ blocks }: { blocks: IBlock[] }): ReactElement => {
  return (
    <React.Fragment>
      {blocks.map((block) => {
        const type = block.component.type;
        const children = block.children;
        const options = block.component.options;

        return (
          <Block
            key={block.id}
            type={type}
            options={options}
            responsiveStyles={block.responsiveStyles}
          >
            {Array.isArray(children) ? (
              <BlockTree blocks={children} />
            ) : (
              <Block
                type={type}
                options={options}
                responsiveStyles={block.responsiveStyles}
              />
            )}
          </Block>
        );
      })}
    </React.Fragment>
  );
};
