import { Header } from "components/Header";
import "./App.scss";
import { MainPanel } from "./components/panel/MainPanel";
import { FilterProvider } from "context/filterContext";

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <Header />
        <MainPanel />
      </FilterProvider>
    </div>
  );
}

export default App;
