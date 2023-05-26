import Layout from "../Layout/Layout";
import userpic from "../assets/images/1234567.png";
import SubWordItem from "../SubWordItem";
import plus from "../assets/images/plus.png";
import refresh from "../assets/images/refresh.png";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Search from "./Search";
import SentenceSearch from "./SentenceSearch";
import ReactPlayer from "react-player";
import { http } from "../http";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthProvider";
import Popup from "../components/popup";
const Sentence = () => {
  const [sentence, setSentence] = useState([]);
  const [videos, setVideos] = useState([]);
  const [counter, setCounter] = useState(0);
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const onPlusHandler = () => {
    if (auth?.user?.is_professional) {
      setSentence([
        ...sentence,
        { id: sentence.length, title: "", video: null },
      ]);
    } else {
      setShowPremiumPopup(true);
    }
  };
  const { state } = useLocation();
  // console.log(state);
  const onResetHandler = () => {
    if (auth?.user?.is_professional) {
      setSentence([]);
      setVideos([]);
    } else {
      setShowPremiumPopup(true);
    }
  };
  useEffect(() => {
    const myFunc = async () => {
      try {
        if (state) {
          // console.log(state);
          setSentence(state);
          const ids = state.map((item) => item.id);
          const { data } = await http.get(
            `word-api/words/make_sentence/?words_id=${ids.toString()}`,
            { headers: { Authorization: `Bearer ${auth.accessToken}` } }
          );
          const urls = data.words_video_link;
          setVideos(urls);
        }
      } catch (error) {
        toast.warn("خطایی رخ داده است، بعدا متحان کنید");
      }
    };
    myFunc();
  }, []);
  // console.log(sentence);
  return (
    <Layout header="جمله سازی">
      <Popup
        show={showPremiumPopup}
        setShow={setShowPremiumPopup}
        title="جمله سازی"
      />
      <div className="sentence-body">
        <div className="sentence-image-container">
          {videos.length > 0 ? (
            <ReactPlayer // Disable download button
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload noplaybackrate nofullscreen",
                  },
                },
              }}
              // Disable right click
              onContextMenu={(e) => e.preventDefault()}
              width={"100%"}
              height={"100%"}
              url={videos && videos[counter]}
              onEnded={() => {
                if (counter === videos.length - 1) setCounter(0);
                else setCounter(counter + 1);
              }}
              controls={true}
              pip={false}
            />
          ) : (
            <img src={userpic} alt="userpic" />
          )}
        </div>
        <div className="sentence-words-container">
          {sentence.map((item) => {
            return (
              <SubWordItem
                sentence={sentence}
                key={item.id}
                routeId={item.id}
                title={item.title}
                setShow={setShowPremiumPopup}
              />
            );
          })}
          <SubWordItem handleClick={onPlusHandler} image={plus} />
          <SubWordItem handleClick={onResetHandler} image={refresh} />
        </div>
      </div>
    </Layout>
  );
};

export default Sentence;
