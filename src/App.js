import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { CategoryContainer } from "./components/CategoryContainer";
import { MainPanel } from "./components/panel/MainPanel";
import { FilterProvider } from "context/filterContext";

function App() {
  return (
    <div className="App">
      <FilterProvider>
        <SearchBar />
        <CategoryContainer />
        <MainPanel />
      </FilterProvider>
    </div>
  );
}

export default App;
