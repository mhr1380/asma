import Layout from "../Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import music from "../assets/images/music.png";
import Popup from "../components/popup";
import { useEffect, useState } from "react";
import { http } from "../http";

const Affair = () => {
  const { auth } = useAuth();
  const navigator = useNavigate();
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const [affairs, setAffairs] = useState([
    {
      id: 1,
      icon: "https://api.eshareh-app.ir/media/media/icon/icons00000014.png",
      sort_id: 1,
      farsi_name: "سرود ناشنوایان",
      english_name: null,
      arabic_name: null,
      parent: null,
    },
    {
      id: 2,
      icon: "https://api.eshareh-app.ir/media/media/icon/icons0000002.png",
      sort_id: 2,
      farsi_name: "مکالمه",
      english_name: null,
      arabic_name: null,
      parent: null,
    },
    {
      id: 260,
      icon: "https://api.eshareh-app.ir/media/media/icon/icons0001.png",
      sort_id: 3,
      farsi_name: "زبان اشاره ایرانی",
      english_name: null,
      arabic_name: null,
      parent: null,
    },
    {
      id: 265,
      icon: "https://api.eshareh-app.ir/media/media/icon/icons00000010.png",
      sort_id: 7,
      farsi_name: "تشکل ها",
      english_name: null,
      arabic_name: null,
      parent: null,
    },
    {
      id: 6,
      icon: "https://api.eshareh-app.ir/media/media/icon/icons0011.png",
      sort_id: 17,
      farsi_name: "شخصیت ها",
      english_name: null,
      arabic_name: null,
      parent: null,
    },
  ]);
  useEffect(() => {
    (async () => {
      const fetchCategories = async () => {
        const { data } = await http.get("/affair-api/affair-categories/", {
          headers: { Authorization: `Bearer ${auth?.accessToken}` },
        });
        if (data.results.length > 0) setAffairs(data.results);
      };
      fetchCategories();
    })();
  }, []);
  return (
    <Layout header="امور ناشنوایان">
      <Popup
        show={showPremiumPopup}
        setShow={setShowPremiumPopup}
        title="امور ناشنوایان"
      />
      <div className="deaf-body">
        <div className="deaf-list-container">
          {affairs.map((affair) => {
            return (
              <div
                onClick={async () => {
                  if (auth?.user?.is_professional) {
                    navigator(`/affair/${affair.farsi_name}`);
                  } else {
                    setShowPremiumPopup(true);
                  }
                }}
                className="deaf-list-item-container"
              >
                <div className="deaf-list-item">
                  <h3>{affair.farsi_name}</h3>
                  <img src={affair.icon} alt="music-icon" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Affair;
