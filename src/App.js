import "./App.css";
import { Route, Routes } from "react-router-dom";
import Imagesearch from "./Components/Imagesearch";
import Bookmark from "./Components/Bookmark";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Imagesearch />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
}

export default App;
