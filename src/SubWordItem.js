import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
const SubWordItem = ({
  title,
  id,
  image,
  handleClick,
  routeId,
  sentence,
  setShow,
}) => {
  const navigate = useNavigate();
  const { auth } = useAuth();
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
          <div
            className="kalameh-alphabet-inner-container"
            onClick={() => {
              if (auth?.user?.is_professional) {
                navigate(`/sentencesearch/${routeId}`, { state: sentence });
              } else {
                setShow(true);
              }
            }}
          >
            <p style={{ fontSize: handleFontSize(title) }}>{title}</p>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div className="kalameh-alphabet-container">
      <Link to={`${id}`}>
        <div className="kalameh-alphabet-inner-container">
          <p style={{ fontSize: handleFontSize(title) }}>{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default SubWordItem;

const handleFontSize = (title) => {
  if (title.length > 8) {
    return "14px";
  }
  return "17px";
};
