import Layout from "../Layout/Layout";
import phonecall from "../assets/images/phone-call.png";
import onetwothree from "../assets/images/123.png";
import user from "../assets/images/user.png";
import { useContext, useState } from "react";
import { Signin } from "../http/login";
import { toast } from "react-toastify";
import Verify from "../http/verify";
import Cookie from "universal-cookie";
import { Router, useNavigate } from "react-router-dom";
import { setName } from "../http/set-name";
import { MyContext, useAuth } from "../context/AuthProvider";
import { useEffect } from "react";
import { getMe } from "../http/get-me";

const Login = () => {
  const [status, setStatus] = useState("default");
  const [placeHolder, setPlaceHolder] = useState("شماره موبایل");
  const [buttonText, setButtonText] = useState("ارسال کد تایید");
  const [input, setInput] = useState("");
  const [family, setFamily] = useState("");
  const [image, setImage] = useState(phonecall);

  const [phone_number, setPhone_number] = useState("");

  const { auth, setAuth } = useAuth();

  const navigate = useNavigate();

  const cookie = new Cookie();

  useEffect(() => {
    if (auth.user) {
      navigate("/profile");
    }
  }, [auth]);
  const loginBtnHandler = async () => {
    try {
      var regex = new RegExp("^(\\+98|0)?9\\d{9}$");

      if (status === "default") {
        if (regex.test(input)) {
          const { data } = await Signin(input);
          setPlaceHolder("کد تایید");
          setButtonText("ورود");
          setImage(onetwothree);
          setStatus("code_sent");
          setInput("");
          setPhone_number(input);
          toast.success("کد تایید برای شما ارسال شد");
        } else {
          toast.error("شماره موبایل وارد شده صحیح نمی باشد");
        }
      }

      if (status === "code_sent") {
        if (input.length === 4) {
          const { data } = await Verify(phone_number, input);
          const { access, refresh } = data;
          const currentDate = new Date();
          currentDate.setMonth((currentDate.getMonth() + 1) % 12);
          cookie.set("accessToken", access, {
            expires: currentDate,
          });
          cookie.set("refreshToken", refresh, {
            expires: currentDate,
          });
          const { data: data2 } = await getMe(access);
          setAuth({ isAuthenicated: true, user: data2, accessToken: access });
          navigate("/profile");
          // setPlaceHolder("نام ");
          // setButtonText("تایید");
          // setImage(user);
          // setInput("");
          // setStatus("loggedIn");
        } else {
          toast.error("کد وارد شده صحیح نمی باشد");
        }
      }
      // if (status === "loggedIn") {
      //   await setName(input, family);
      //   user.setUser({ first_name: input, last_name: family });
      //   // const {data}
      //   navigate("/words");
      // }
    } catch (error) {
      if (error.response.data) {
        const { data } = error.response;
        toast.error(data.errors[0].message);
      } else {
        toast.error("مشکلی در ارتباط با سرور پیش آمده است");
      }
    }
  };
  return (
    <Layout header="ورود">
      <div className="login-body">
        <div className="login-container">
          <div className="login-input-container">
            <input
              className="login-input"
              placeholder={placeHolder}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <img src={image} alt="phonecall" />
          </div>
          {status === "loggedIn" && (
            <div className="login-input-container">
              <input
                className="login-input"
                placeholder="نام خانوادگی"
                type="text"
                value={family}
                onChange={(e) => setFamily(e.target.value)}
              />
              <img src={user} alt="phonecall" />
            </div>
          )}
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
