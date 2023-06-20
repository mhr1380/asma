import Layout from "../Layout/Layout";
import imageGallery from "../assets/images/image-gallery.png";
import multimedia from "../assets/images/multimedia.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useState } from "react";
import Popup from "../components/popup";
const Test = () => {
  const navigator = useNavigate();
  const { auth, setAuth } = useAuth();
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  return (
    <Layout header="آزمون">
      {showPremiumPopup && (
        <Popup
          show={showPremiumPopup}
          setShow={setShowPremiumPopup}
          title="آزمون تصویری"
        />
      )}
      <div className="test-body">
        <div className="test-list-container">
          <div className="deaf-list-item-container">
            <Link to="/test/testbegin">
              <div className="deaf-list-item test grey">
                <h3>آزمون تصویری</h3>
                <img src={imageGallery} alt="music-icon" />
              </div>
            </Link>
          </div>{" "}
          <div
            className="deaf-list-item-container"
            onClick={() => {
              if (auth?.user?.is_professional) {
                navigator("/test/testbegin?video");
              } else {
                setShowPremiumPopup(true);
              }
            }}
          >
            <div className="deaf-list-item test pink">
              <h3>آزمون ویدیویی</h3>
              <img src={multimedia} alt="music-icon" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Test;
