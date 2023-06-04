import { Fragment } from "react";
import { Cookies } from "react-cookie";
import useCookies from "react-cookie/cjs/useCookies";
import { Link, useNavigate } from "react-router-dom";
import close from "./assets/images/close.png";
import { useAuth } from "./context/AuthProvider";
import { http } from "./http";
const SlideMenu = ({ showMenu, closeMenu }) => {
  const { auth, setAuth } = useAuth();
  const [cookies, setCookie, removeCookie] = useCookies([
    "accessToken",
    "refreshToken",
  ]);
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className={`slide-menu ${showMenu ? "show" : ""}`}>
        <div className="slide-menu-f-back">
          <div className="slide-menu-f-back-inner">
            {/* <div className="slide-menu-item">
              <div className="slide-menu-item-inner">علاقه مندی</div>
            </div> */}
            {!auth?.user?.is_professional && (
              <div className="slide-menu-item">
                <div
                  className="slide-menu-item-inner"
                  onClick={async () => {
                    if (auth.accessToken) {
                      const { data } = await http.post(
                        "kernel-api/bankgateway/",
                        {},
                        {
                          headers: {
                            Authorization: `Bearer ${auth.accessToken}`,
                          },
                        }
                      );
                      const url = data.slice(
                        data.indexOf("action") + 8,
                        data.indexOf("action") + 95
                      );
                      window.location.href = url;
                    } else {
                      navigate("/login");
                    }
                  }}
                >
                  خرید برنامه
                </div>
              </div>
            )}
            <div className="slide-menu-item">
              <div className="slide-menu-item-inner">تماس با ما</div>
            </div>
            <div className="slide-menu-item">
              <Link to="/about-us">
                <div className="slide-menu-item-inner">درباره ما</div>
              </Link>
            </div>{" "}
            {auth.accessToken && (
              <div className="slide-menu-item">
                <Link to="/profile">
                  <div className="slide-menu-item-inner">پروفایل</div>
                </Link>
              </div>
            )}
            {auth.accessToken && (
              <div
                className="slide-menu-item"
                onClick={() => {
                  removeCookie("accessToken");
                  removeCookie("refreshToken");
                  setAuth({});
                  navigate("/login");
                }}
              >
                <div className="slide-menu-item-inner">خروج</div>
              </div>
            )}
          </div>
        </div>
        <div className="close-slide-menu" onClick={closeMenu}>
          <img src={close} alt="close" />
        </div>
      </div>
    </Fragment>
  );
};

export default SlideMenu;
