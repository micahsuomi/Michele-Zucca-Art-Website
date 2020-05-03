import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Header from '../header';
import Footer from '../footer';
import layoutStyles from './styles.module.scss';

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


