import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "universal-cookie";
import { getMe } from "../http/get-me";
import { refresh } from "../http/refresh";

export const MyContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenicated: false,
    user: null,
    login: null,
    accessToken: null,
  });

  const cookie = new Cookie();
  const navigate = useNavigate();
  useEffect(() => {
    const storedAccessToken = cookie.get("accessToken");
    const storedRefreshToken = cookie.get("refreshToken");
    const checkAuth = async () => {
      if (storedAccessToken || storedRefreshToken) {
        try {
          const { data } = await getMe(storedAccessToken);
          setAuth({
            isAuthenicated: true,
            user: data,
            accessToken: storedAccessToken,
          });
        } catch (error) {
          try {
            const { data } = await refresh(storedRefreshToken);
            const { access } = data;
            cookie.set("accessToken", access);
            const { data: data2 } = await getMe(access);
            setAuth({ isAuthenicated: true, user: data2, accessToken: access });
          } catch (error) {
            navigate("/login");
          }
        }
      } else {
        navigate("/login");
      }
    };
    checkAuth();
  }, []);

  return (
    <MyContext.Provider value={{ auth, setAuth }}>
      {children}
    </MyContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  const { auth, setAuth } = useContext(MyContext);
  return { auth, setAuth };
};
