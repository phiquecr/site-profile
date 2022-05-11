import React from "react";
import GlobalStyle from "../../styles/GlobalStyle";
import Header from "../Header";

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout