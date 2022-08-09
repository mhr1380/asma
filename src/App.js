import "./App.css";
import Kalameh from "./Kalameh";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deaf from "./Deaf";
import Sentence from "./Sentence";
import Test from "./Test";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/word" element={<Kalameh />}></Route>
        <Route path="/deaf" element={<Deaf />}></Route>
        <Route path="/sentence" element={<Sentence />}></Route>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
