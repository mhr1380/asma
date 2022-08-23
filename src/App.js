import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Deaf from "./pages/Deaf";
import Sentence from "./pages/Sentence";
import Test from "./pages/Test";
import Words from "./pages/Words";
import Alphabet from "./Alphabet";
import WordDescription from "./WordDescription";
import { Navigate } from "react-router-dom";
import TestBegin from "./pages/TestBegin";
import Search from "./pages/Search";
import SentenceSearch from "./pages/SentenceSearch";
import Login from "./pages/Login";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test/testbegin" element={<TestBegin />}></Route>

        <Route
          path="/words/alphabet/subword/description"
          element={<WordDescription />}
        ></Route>
        <Route
          path="/words/:category/:wordid"
          element={<WordDescription />}
        ></Route>
        <Route path="/words/:category" element={<Alphabet />}></Route>
        <Route path="/words" element={<Words />}></Route>
        <Route path="/deaf" element={<Deaf />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/sentencesearch/:routeId"
          element={<SentenceSearch />}
        ></Route>
        <Route path="/sentence" element={<Sentence />}></Route>
        <Route path="/test" element={<Test />}></Route>
        <Route path="/" element={<Navigate to="/words" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
