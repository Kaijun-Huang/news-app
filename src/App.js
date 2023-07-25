import "./App.css";
import { SearchBar } from "./components/SearchBar";
import { CategoryContainer } from "./components/CategoryContainer";
import { MainPanel } from "./components/panel/MainPanel";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <CategoryContainer />
      <MainPanel />
    </div>
  );
}

export default App;
