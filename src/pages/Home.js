import Layout from "../Layout/Layout";
import music from "../assets/images/music.png";
import { Link } from "react-router-dom";

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
                style={{ backgroundColor: "#F672804a" }}
              >
                <h3>کلمه</h3>
                <img src={music} alt="music-icon" />
              </div>
            </div>
          </Link>

          <Link to="/deaf">
            {" "}
            <div className="deaf-list-item-container">
              <div
                className="deaf-list-item"
                style={{ backgroundColor: "#c06c844a" }}
              >
                <h3>امور ناشنوایان</h3>
                <img src={music} alt="music-icon" />
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
                <img src={music} alt="music-icon" />
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
                <img src={music} alt="music-icon" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
