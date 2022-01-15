import { LeftBlock } from "./components/LeftBlock/LeftBlock";
import { Menu } from "./components/Menu/Menu";
import { RightBlock } from "./components/RightBlock/RightBlock";

function App() {
  return (
    <div className="appWrapper">
      <div className="content">
        <LeftBlock />
        <RightBlock />
      </div>
     <Menu />
    </div>
  );
}

export default App;
