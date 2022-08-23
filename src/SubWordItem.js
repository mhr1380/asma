import { Link } from "react-router-dom";
const SubWordItem = ({ title, id, image, handleClick, routeId, sentence }) => {
  if (image) {
    return (
      <div
        onClick={(e) => {
          handleClick(e);
        }}
        className="kalameh-alphabet-container"
      >
        <div className="kalameh-alphabet-inner-container words-icons">
          <img src={image} />
        </div>
      </div>
    );
  }
  if (routeId || routeId === 0) {
    return (
      <div className="kalameh-alphabet-container">
        <Link to={`/sentencesearch/${routeId}`} state={sentence}>
          <div className="kalameh-alphabet-inner-container">
            <p>{title}</p>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div className="kalameh-alphabet-container">
      <Link to={`${id}`}>
        <div className="kalameh-alphabet-inner-container">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default SubWordItem;
