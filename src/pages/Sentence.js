import Layout from "../Layout/Layout";
import userpic from "../assets/images/1234567.png";
import SubWordItem from "../SubWordItem";
import plus from "../assets/images/plus.png";
import refresh from "../assets/images/refresh.png";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Search from "./Search";
import SentenceSearch from "./SentenceSearch";
import ReactPlayer from "react-player";
const Sentence = () => {
  const [sentence, setSentence] = useState([]);
  const [videos, setVideos] = useState([]);
  const [counter, setCounter] = useState(0);
  const onPlusHandler = () => {
    setSentence([...sentence, { id: sentence.length, title: "", video: null }]);
  };
  const { state } = useLocation();

  const onResetHandler = () => {
    setSentence([]);
    setVideos([]);
  };
  useEffect(() => {
    if (state) {
      setSentence(state);
      const urls = state.map((item) => item.video);
      setVideos(urls);
    }
  }, []);
  console.log(sentence);
  return (
    <Layout header="جمله سازی">
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
                if (counter === videos.length - 1) {
                  setCounter(0);
                } else {
                  setCounter(counter + 1);
                }
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
