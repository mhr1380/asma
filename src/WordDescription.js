import Layout from "./Layout";

const WordDescription = () => {
  return (
    <Layout header="کلمه">
      <div className="description-body">
        <div className="description-media-container"></div>
        <div className="description-text-container">
          <p>دوشنبه</p>
          <p>تلفظ : د شنبه</p>
        </div>
        <div className="description-media-container half"></div>
        <div className="arrow-buttons-container">
          <button className="arrow-btn">{"<"}</button>
          <button className="arrow-btn">{">"}</button>
        </div>
      </div>
    </Layout>
  );
};

export default WordDescription;
