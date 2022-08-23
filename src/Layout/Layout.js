import React from "react";
import Navmenu from "../Navmenu";
import Header from "../Header";
const Layout = ({ children, header, home }) => {
  return (
    <React.Fragment>
      <Header homee={home} text={header} />
      {children}
      <Navmenu />
    </React.Fragment>
  );
};

export default Layout;
