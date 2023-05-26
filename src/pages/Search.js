import Layout from "../Layout/Layout";
import searchblack from "../assets/images/searchblack.png";
import { useState } from "react";
import { http } from "../http";
import { useNavigate } from "react-router-dom";
const Search = () => {
  //   const [search, setSearch] = useState("");
  const [words, setWords] = useState(null);
  const navigate = useNavigate();
  const handleSearch = async (e) => {
    if (e.target.value === "") {
      setWords(null);
      return;
    }
    const { data } = await http.get(
      `kernel-api/search/?search=${e.target.value}`
    );
    setWords(data);
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
          {words?.words &&
            words.words.map((word) => {
              return (
                <div
                  key={word.id}
                  onClick={() => {
                    navigate("/words/search/" + word.id);
                  }}
                  className="search-words-item"
                >
                  {word.farsi_name} - کلمه
                </div>
              );
            })}
          {words?.affairs &&
            words.affairs.map((word) => {
              return (
                <div
                  key={word.id}
                  onClick={() => {
                    navigate("/affair/search/" + word.id);
                  }}
                  className="search-words-item"
                >
                  {word.farsi_description.length > 20
                    ? word.farsi_description.slice(0, 17) + "..."
                    : word.farsi_description}{" "}
                  - امور ناشنوایان
                </div>
              );
            })}
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

export default Search;
