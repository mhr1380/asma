import Layout from "../Layout/Layout";
import next from "../assets/images/next.png";
import prev from "../assets/images/prev.png";
import doubleright from "../assets/images/left-arrow.svg";
import { useEffect, useState } from "react";
import { http } from "../http";
const TestBegin = () => {
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctsCounter, setCorrectsCounter] = useState(0);
  const [incorrectsCounter, setIncorrectsCounter] = useState(0);
  const [handleNext, setHandleNext] = useState(0);
  useEffect(() => {
    const fetchTest = async () => {
      const { data } = await http.get("/exam-api/exams/");
      const exam = data.results[0];
      const { options } = exam;
      setOptions(options);
      let x = Math.floor(Math.random() * 4);
      const correct = options[x];
      setCorrectAnswer(correct);
    };
    fetchTest();
  }, [handleNext]);

  return (
    <Layout header="آزمون">
      <div className="test-begin-body">
        <div className="test-begin-img-container">
          <img src={correctAnswer && correctAnswer.word.image} />
        </div>
        <div className="test-begin-options-container">
          {options.map((option) => {
            return (
              <div
                key={option.id}
                onClick={(e) => {
                  if (!showAnswer) {
                    if (option.id === correctAnswer.id) {
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
                  option.id === correctAnswer.id && showAnswer ? "correct" : ""
                }`}
              >
                {option.word.farsi_name}
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
