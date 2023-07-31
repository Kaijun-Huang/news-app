import { Header } from "components/Header";
import "./App.scss";
import { MainPanel } from "./components/panel/MainPanel";
import { FilterProvider } from "context/filterContext";
import { CategoryContainer } from "components/CategoryContainer";

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <Header />
        {/* <CategoryContainer /> */}
        <MainPanel />
      </FilterProvider>
    </div>
  );
}

export default App;
