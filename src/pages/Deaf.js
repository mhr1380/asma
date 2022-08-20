import Layout from "../Layout/Layout";
import music from "../assets/images/music.png";
const Deaf = () => {
  return (
    <Layout header="امور ناشنوایان">
      <div className="deaf-body">
        <div className="deaf-list-container">
          <div className="deaf-list-item-container">
            <div className="deaf-list-item">
              <h3>سرود ناشنوایان</h3>
              <img src={music} alt="music-icon" />
            </div>
          </div>
          <div className="deaf-list-item-container">
            <div
              className="deaf-list-item"
              style={{ backgroundColor: "#ECD2DA" }}
            >
              <h3>زبان اشاره ایرانی</h3>
              <img src={music} alt="music-icon" />
            </div>
          </div>
          <div className="deaf-list-item-container">
            <div
              className="deaf-list-item"
              style={{ backgroundColor: "#FCD4D9" }}
            >
              <h3>تشکل ها</h3>
              <img src={music} alt="music-icon" />
            </div>
          </div>
          <div className="deaf-list-item-container">
            <div className="deaf-list-item">
              <h3>نماز</h3>
              <img src={music} alt="music-icon" />
            </div>
          </div>
          <div className="deaf-list-item-container">
            <div
              className="deaf-list-item"
              style={{ backgroundColor: "#ECD2DA" }}
            >
              <h3>شخصیت ها</h3>
              <img src={music} alt="music-icon" />
            </div>
          </div>
          <div className="deaf-list-item-container">
            <div
              className="deaf-list-item"
              style={{ backgroundColor: "#FCD4D9" }}
            >
              <h3>سرود ناشنوایان</h3>
              <img src={music} alt="music-icon" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deaf;
