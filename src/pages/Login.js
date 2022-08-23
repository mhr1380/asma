import Layout from "../Layout/Layout";
import phonecall from "../assets/images/phone-call.png";
import onetwothree from "../assets/images/123.png";
import user from "../assets/images/user.png";
import { useState } from "react";
const Login = () => {
  const [status, setStatus] = useState("login");
  const [placeHolder, setPlaceHolder] = useState("شماره موبایل");
  const [buttonText, setButtonText] = useState("ارسال کد تایید");
  const [image, setImage] = useState(phonecall);
  const loginBtnHandler = () => {
    if (status === "login") {
      // sendRequst for get code
      setPlaceHolder("کد تایید");
      setButtonText("ورود");
      setImage(onetwothree);
      setStatus("verify");
    }
    if (status === "verify") {
      setPlaceHolder("نام و نام خانوادگی");
      setButtonText("تایید");
      setImage(user);
      setStatus("loggedIn");
    }
  };
  return (
    <Layout header="ورود">
      <div className="login-body">
        <div className="login-container">
          {" "}
          <div className="login-input-container">
            <input
              className="login-input"
              placeholder={placeHolder}
              type="text"
            />
            <img src={image} alt="phonecall" />
          </div>
          <div className="login-btn-container">
            <button onClick={loginBtnHandler} className="login-btn">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
