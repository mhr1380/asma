import Layout from "../Layout/Layout";
import next from "../assets/images/next.png";
import prev from "../assets/images/prev.png";

const TestBegin = () => {
  return (
    <Layout header="آزمون">
      <div className="test-begin-body">
        <div className="test-begin-img-container"></div>
        <div className="test-begin-options-container">
          <div className="test-begin-option wrong">خداحافظ</div>
          <div className="test-begin-option">تلفن</div>
          <div className="test-begin-option correct">سلام</div>
          <div className="test-begin-option">فردا</div>
        </div>
        <div className="test-begin-arrows">
          <img src={next} alt="arrow-right" />
          <img src={prev} alt="arrow-left" />
        </div>
      </div>
    </Layout>
  );
};

export default TestBegin;
