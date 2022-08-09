import React from "react";
import Navmenu from "./Navmenu";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header></Header>
      {children}
      <Navmenu></Navmenu>
    </React.Fragment>
  );
};

export default Layout;
