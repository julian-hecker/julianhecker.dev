import React from 'react';

import Footer from './Footer';
import Header from './Header';

import '../styles/index.scss';

const Layout = ({ children }) => (
    <>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
);

export default Layout;
