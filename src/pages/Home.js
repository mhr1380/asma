import Layout from "../Layout/Layout";
import music from "../assets/images/music.png";
import capital from "../assets/images/capital-letter@2x.png";
import ear from "../assets/images/ear@2x.png";
import puzzle from "../assets/images/puzzle (1)@2x.png";
import test from "../assets/images/test@2x.png";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Home = () => {
  return (
    <Layout home={true}>
      {" "}
      <div className="home-body">
        <div className="deaf-list-container">
          <Link to="/words">
            <div className="deaf-list-item-container">
              <div
                className="deaf-list-item"
                style={{ backgroundColor: "#aaceff" }}
              >
                <h3>کلمه</h3>
                <img src={capital} alt="music-icon" />
              </div>
            </div>
          </Link>

          <Link to="/affair">
            {" "}
            <div className="deaf-list-item-container">
              <div
                className="deaf-list-item"
                style={{ backgroundColor: "#d4e6ff" }}
              >
                <h3>امور ناشنوایان</h3>
                <img src={ear} alt="music-icon" />
              </div>
            </div>
          </Link>
          <Link to="/sentence">
            <div className="deaf-list-item-container">
              <div
                className="deaf-list-item"
                style={{ backgroundColor: "#6c5b7b4a" }}
              >
                <h3>جمله سازی</h3>
                <img src={puzzle} alt="music-icon" />
              </div>
            </div>
          </Link>
          <Link to="/test">
            {" "}
            <div className="deaf-list-item-container">
              <div
                className="deaf-list-item"
                style={{ backgroundColor: "#355C7D4a" }}
              >
                <h3>آزمون</h3>
                <img src={test} alt="music-icon" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
