import React, { useState } from "react";
import Navmenu from "../Navmenu";
import Header from "../Header";
import SlideMenu from "../SlideMenu";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children, header, home }) => {
  const [showMenu, setShowMenu] = useState(false);
  const openMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuHandler = () => {
    setShowMenu(false);
  };
  return (
    <React.Fragment>
      <SlideMenu showMenu={showMenu} closeMenu={closeMenuHandler} />
      <Header homee={home} text={header} openMenu={openMenuHandler} />
      {children}
      <Navmenu />
    </React.Fragment>
  );
};

export default Layout;
