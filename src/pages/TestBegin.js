import Layout from "../Layout/Layout";
import next from "../assets/images/next.png";
import prev from "../assets/images/prev.png";
import doubleright from "../assets/images/left-arrow.svg";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Cookie from "universal-cookie";

import { http } from "../http";
import { getMe } from "../http/get-me";
import { toast } from "react-toastify";
import { useContext } from "react";

import Popup from "../components/popup";
import ReactPlayer from "react-player";
import { useAuth } from "../context/AuthProvider";
const TestBegin = () => {
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctsCounter, setCorrectsCounter] = useState(0);
  const [incorrectsCounter, setIncorrectsCounter] = useState(0);
  const [handleNext, setHandleNext] = useState(0);
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const navigator = useNavigate();
  const { auth, setAuth } = useAuth();
  console.log(auth);
  useEffect(() => {
    const fetchTest = async () => {
      if (auth.accessToken) {
        let { data } = await http.get("/word-api/exams/", {
          headers: { Authorization: `Bearer ${auth.accessToken}` },
        });
        console.log(data);
        const options = data.results;
        setOptions(options);
        let x = Math.floor(Math.random() * 4);
        const correct = options[x];
        setCorrectAnswer(correct);
      } else {
        navigator("/login");
      }
    };
    fetchTest();
  }, [auth, handleNext]);

  console.log(correctAnswer);
  return (
    <Layout header="آزمون">
      {console.log(correctAnswer)}
      {showPopup && <Popup />}
      <div className="test-begin-body">
        <div className="test-begin-img-container">
          {location.search === "?video" ? (
            <ReactPlayer
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
              url={correctAnswer?.video_link?.video1}
              loop={true}
              controls={true}
              pip={false}
            />
          ) : (
            <img src={correctAnswer && correctAnswer?.image} />
          )}
        </div>
        <div className="test-begin-options-container">
          {options.map((option) => {
            return (
              <div
                key={option?.id}
                onClick={(e) => {
                  if (!showAnswer) {
                    if (option?.id === correctAnswer.id) {
                      e.target.className = "test-begin-option correct";
                      setShowAnswer(true);
                      setIsCorrect(true);
                      setCorrectsCounter(correctsCounter + 1);
                    } else {
                      e.target.className = "test-begin-option wrong";
                      setShowAnswer(true);
                      setIncorrectsCounter(incorrectsCounter + 1);
                    }
                  }
                }}
                className={`test-begin-option ${
                  option?.id === correctAnswer.id && showAnswer ? "correct" : ""
                }`}
              >
                {option?.farsi_name}
              </div>
            );
          })}
        </div>

        <div className="test-begin-arrows">
          <div
            onClick={() => {
              setIsCorrect(false);
              setShowAnswer(false);
              setHandleNext(handleNext + 1);
            }}
            className="test-begin-btn"
          >
            <img src={doubleright} alt="next" />
            <p>بعدی</p>{" "}
          </div>
          {showAnswer &&
            (isCorrect ? (
              <div className="test-begin-btn correct">
                <p>درست</p>
              </div>
            ) : (
              <div className="test-begin-btn wrong">
                <p>نادرست</p>
              </div>
            ))}
        </div>
      </div>
      <div className="test-begin-score-container">
        <div className="test-begin-score-item green">
          <p>{correctsCounter}</p>
        </div>{" "}
        <div className="test-begin-score-item red">
          <p>{incorrectsCounter} </p>
        </div>{" "}
      </div>
    </Layout>
  );
};

export default TestBegin;
