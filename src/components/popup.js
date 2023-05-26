import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import heart from "../assets/images/red-heart.png";
import { useAuth } from "../context/AuthProvider";
import { buy } from "../http/buy";
import useOnClickOutside from "./useOutside";
const Popup = ({ title, show, setShow }) => {
  // const [show, setshow] = useState(true);
  const ref = useRef();
  const navigator = useNavigate();
  const { auth, setAuth } = useAuth();
  useOnClickOutside(ref, () => {
    setShow(false);
  });
  return (
    <div className={`popup-background ${show ? "show" : ""}`}>
      <div className="popup-body" ref={ref}>
        <p className="mg-b-15">
          برای دسترسی به بخش <span className="bold">{title}</span> لطفا اشتراک
          ویژه مارا تهیه کنید
        </p>
        <p className="bold">از حمایت شما متشکریم</p>
        <img src={heart} alt="heart" className="mg-b-15" />
        <div
          className="popup-btn"
          onClick={async () => {
            if (auth.accessToken) {
              const { data } = await buy(auth.accessToken);
              const url = data.slice(
                data.indexOf("action") + 8,
                data.indexOf("action") + 95
              );
              window.location.href = url;
            } else {
              navigator("/login");
            }
          }}
        >
          خرید
        </div>
      </div>
    </div>
  );
};

export default Popup;
