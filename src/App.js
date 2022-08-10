import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deaf from "./Deaf";
import Sentence from "./Sentence";
import Test from "./Test";
import Words from "./Words";
import Alphabet from "./Alphabet";
import SubWord from "./SubWord";
import WordDescription from "./WordDescription";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/words/alphabet/subword/description"
          element={<WordDescription />}
        ></Route>
        <Route path="/words/alphabet/subword" element={<SubWord />}></Route>
        <Route path="/words/alphabet" element={<Alphabet />}></Route>
        <Route path="/words" element={<Words />}></Route>
        <Route path="/deaf" element={<Deaf />}></Route>
        <Route path="/sentence" element={<Sentence />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/" element={<Words />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
