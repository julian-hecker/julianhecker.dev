import React from "react";
import Helmet from "react-helmet";

import Footer from "./Footer";
import Header from "./Header";

import "../styles/index.css";
import favicon from "../assets/icons/favicon.png";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
