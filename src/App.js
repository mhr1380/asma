import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import AboutUs from "./pages/About-us";
import Profile from "./pages/Profile";
import AuthProvider from "./context/AuthProvider";
import Affair from "./pages/Affair";
import Likes from "./pages/Likes";
import AffairsCategory from "./pages/AffairsCategory";
import AffairDescription from "./pages/AffairDescription";
import { ToastContainer } from "react-toastify";
import Success from "./pages/Success";
import Failed from "./pages/Failed";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer></ToastContainer>

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
          <Route path="/likes" element={<Likes />}></Route>
          <Route path="/affair" element={<Affair />}></Route>
          <Route path="/affair/:category" element={<AffairsCategory />}></Route>
          <Route
            path="/affair/:category/:wordid"
            element={<AffairDescription />}
          ></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/success" element={<Success />}></Route>
          <Route path="/failed" element={<Failed />}></Route>
          <Route path="/about-us" element={<AboutUs />}></Route>
          <Route
            path="/sentencesearch/:routeId"
            element={<SentenceSearch />}
          ></Route>
          <Route path="/sentence" element={<Sentence />}></Route>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<Navigate to="/words" />}></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
