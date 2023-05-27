import { createBrowserRouter, RouterProvider } from "react-router-dom";

import type { IBlock } from "./components";
import { CreateReactAppHierarchy } from "./components";
import { SEO } from "./components/SEO";
import { reactAppData } from "./data";

const router = createBrowserRouter([
  {
    path: reactAppData.url,
    element: (
      <CreateReactAppHierarchy blocks={reactAppData.blocks as IBlock[]} />
    ),
  },
]);

const App = () => {
  return (
    <>
      <SEO title={reactAppData.title} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
