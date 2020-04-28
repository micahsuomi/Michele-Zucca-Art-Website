import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import layoutStyles from './layout.module.scss';

const Layout = ({children}) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
            subtitle
            author
          }
        }
      }
    `);
    return (
        <div className={layoutStyles.container}>
            <Header title={data.site.siteMetadata.title}
                    subtitle={data.site.siteMetadata.subtitle}/>
            <div className={layoutStyles.content}>
            {children}
            </div>
            <Footer author={data.site.siteMetadata.author}/>
        </div>
    )
}

export default Layout;


