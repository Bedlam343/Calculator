import Screen from "./components/Screen";
import FullGrid from "./components/Grids/FullGrid";
import cssClasses from "./App.module.css";

function App() {
  const { box } = cssClasses;
  return (
    <div className={box}>
      <Screen />
      <FullGrid />
    </div>
  );
}

export default App;
