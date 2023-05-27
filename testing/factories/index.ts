import type { IBlock } from "../../src/components";
import type { ImageProps, SectionProps } from "../../src/ui";

export const text = "test text located here";

export const rootFactory = {
  url: "/",
  title: "test title",
  blocks: [],
};

export function textFactory(): IBlock {
  return {
    id: "id",
    component: {
      type: "text",
      options: {
        text,
        responsiveStyles: {},
      },
    },
    children: [],
    responsiveStyles: {},
  };
}

export function BoxFactory(): IBlock {
  return {
    id: "id",
    component: {
      type: "box",
      options: {
        responsiveStyles: {},
      },
    },
    children: [textFactory(), textFactory()],
    responsiveStyles: { large: { color: "red" } },
  };
}

export function sectionFactory(): IBlock {
  return {
    id: "id",
    component: {
      type: "section",
      options: {
        maxWidth: 100,
      } as SectionProps,
    },
    children: [textFactory()],
    responsiveStyles: {},
  };
}

export function ImageFactory(): IBlock {
  return {
    id: "id",
    component: {
      type: "image",
      options: {
        image:
          "https://img.freepik.com/free-vector/realistic-neon-lights-background_52683-59889.jpg",
      } as ImageProps,
    },
    children: [textFactory()],
    responsiveStyles: {},
  };
}
