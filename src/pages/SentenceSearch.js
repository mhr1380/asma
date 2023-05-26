import Layout from "../Layout/Layout";
import searchblack from "../assets/images/searchblack.png";
import { useEffect, useState } from "react";
import { http } from "../http";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { getWord } from "../http/get-single-word";
import { useAuth } from "../context/AuthProvider";
const SentenceSearch = () => {
  const [search, setSearch] = useState("");
  const [words, setWords] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { auth, setAuth } = useAuth();
  const handleSearch = async (e) => {
    if (e.target.value === "") {
      setWords(null);
      return;
    }
    const { data } = await http.get(
      `/word-api/words/?search=${e.target.value}`
    );
    const { results } = data;
    setWords(results);
  };
  return (
    <Layout header="جستجو">
      <div className="search-body">
        <div className="search-input-container">
          <input
            // value={search}
            onChange={(e) => handleSearch(e)}
            //   setSearch(e.target.value);

            className="search-input"
            type="text"
            placeholder="جستجو"
          />
          <img src={searchblack} alt="search" className="search-icon" />
        </div>
        <div
          className={`search-words-container w-100 ${
            (!words || words.length === 0) && "vh-50"
          }`}
        >
          {!words && <p> کلمه ی مورد نظر خود را جستجو کنید</p>}
          {words &&
            words.map((word) => (
              <div
                onClick={() => {
                  const newSentence = [...state];
                  newSentence[params.routeId].id = word.id;
                  newSentence[params.routeId].title = word.farsi_name;
                  navigate("/sentence", { state: newSentence });
                }}
                className="search-words-item"
              >
                {word.farsi_name}
              </div>
            ))}
          {words && words.length === 0 && (
            <div className="not-found-container">
              <p>لغت مورد نظر پیدا نشد</p>
              <div className="t-a-right">
                برای ارسال درخواست افزودن لغت کلیک کنید
                <div className="req-btn">
                  <p>درخواست</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default SentenceSearch;
