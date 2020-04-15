import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
// import './header.module.scss';
import headerStyles from './header.module.scss';



const Header = () => {
    //it will allowe us to query the graphql api
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `);
    return (
        <header styles={headerStyles.header}>
        <h2>
        <Link to ="/" className={headerStyles.title}>
        {data.site.siteMetadata.title}
        </Link>
        </h2>

        <nav>
            <ul className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/">Home</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/about">About Me</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/blog">Blog</Link></li>
                <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to ="/contact">Contact</Link></li>
            </ul>
            
        </nav>
        </header>
    )
}

export default Header;
