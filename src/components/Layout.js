import React from 'react';
import Header from './Header';
import Footer from './Footer';
import layoutStyles from './layout.module.scss';

const Layout = (props) => {
    return (
        <div className={layoutStyles.container}>
            <Header />
            <div className={layoutStyles.content}>
            {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;


