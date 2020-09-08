import React from "react";
import Header from "./Header";
// eslint-disable-next-line import/no-named-as-default
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="App">
    {children}
    <Footer />
  </div>
);

export default Layout;
