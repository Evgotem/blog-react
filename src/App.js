import { LeftBlock } from "./components/LeftBlock/LeftBlock";
import { RightBlock } from "./components/RightBlock/RightBlock";

function App() {
  return (
    <div className="appWrapper">
      <div className="content">
        <LeftBlock />
        <RightBlock />
      </div>
      <div className="menu">
        <span>Меню</span>
      </div>
    </div>
  );
}

export default App;
