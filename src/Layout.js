import React from "react";
import Navmenu from "./Navmenu";
import Header from "./Header";
const Layout = ({ children, header }) => {
  return (
    <React.Fragment>
      <Header text={header} />
      {children}
      <Navmenu />
    </React.Fragment>
  );
};

export default Layout;
