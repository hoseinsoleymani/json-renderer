import { CreateReactAppHierarchy } from "./components";
import { reactAppData } from "./data";

const App = () => {
  return (
    <CreateReactAppHierarchy
      title={reactAppData.title}
      blocks={reactAppData.blocks}
      url={reactAppData.url}
    />
  );
};

export default App;
