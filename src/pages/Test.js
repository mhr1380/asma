import Layout from "../Layout/Layout";
import music from "../assets/images/music.png";
import { Link } from "react-router-dom";
const Test = () => {
  return (
    <Layout header="آزمون">
      <div className="test-body">
        <div className="test-list-container">
          <div className="deaf-list-item-container">
            <Link to="/test/testbegin">
              <div className="deaf-list-item test grey">
                <h3>آزمون تصویری</h3>
                <img src={music} alt="music-icon" />
              </div>
            </Link>
          </div>{" "}
          <div className="deaf-list-item-container">
            <div className="deaf-list-item test pink">
              <h3>آزمون ویدیویی</h3>
              <img src={music} alt="music-icon" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Test;
