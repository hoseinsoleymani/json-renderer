import { screen, waitFor } from "@testing-library/react";

import { render } from "../../testing";
import {
  BoxFactory,
  ImageFactory,
  rootFactory,
  sectionFactory,
  text,
  textFactory,
} from "../../testing/factories";
import { SEO } from ".";
import { BlockTree } from "./BlockTree";

it("should render text component", () => {
  render(<BlockTree blocks={[textFactory()]} />);
  const textEL = screen.getByText(text);

  expect(textEL).toBeInTheDocument();
});

it("should render multi text components", () => {
  render(<BlockTree blocks={[textFactory(), textFactory()]} />);
  const textsEL = screen.getAllByText(text);
  expect(textsEL).length(2);
});

it("should render box component", () => {
  render(<BlockTree blocks={[BoxFactory()]} />);
  const textsEL = screen.getAllByText(text);
  expect(textsEL).length(2);
});

it("should render section component", () => {
  const { container } = render(<BlockTree blocks={[sectionFactory()]} />);
  const sectionEL = container.querySelector("section");

  expect(sectionEL).toBeInTheDocument();
});

it("should apply maxWidth style for section component", () => {
  const { container } = render(<BlockTree blocks={[sectionFactory()]} />);
  const sectionEL = container.querySelector("section");

  expect(sectionEL).toHaveStyle("max-width: 100px");
});

it("should render image component with correct src", () => {
  const { container } = render(<BlockTree blocks={[ImageFactory()]} />);
  const {
    component: {
      options: { image },
    },
  } = ImageFactory();

  const imageEL = container.querySelector("img");
  expect(imageEL).toHaveAttribute("src", image);
});

it("shouldn't render children for images", () => {
  render(<BlockTree blocks={[ImageFactory()]} />);
  const textEL = screen.queryByText(text);

  expect(textEL).toBeNull();
});

it("should change title of page", async () => {
  render(<SEO title={rootFactory.title} />);
  await waitFor(() => expect(document.title).toEqual(rootFactory.title));
});
