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
            subtitle
          }
        }
      }
    `);
    return (
        <header styles={headerStyles.header}>
          <div>
        <Link to ="/" className={headerStyles.title}>
        <h2>{data.site.siteMetadata.title}</h2>
        <p className={headerStyles.subtitle}>
        {data.site.siteMetadata.subtitle}
        </p>
        </Link>
        </div>

        <nav>
            <ul className={headerStyles.navList}>
                <li><Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/">
                  Home
                </Link></li>

                <li><Link className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem} 
                to ="/about">
                  About Me
                </Link></li>

                <li><Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/portfolio">
                  Portfolio
                  </Link></li>

                <li><Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/abstracts">
                  Abstracts
                  </Link></li>  

                <li><Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/digital">
                  Digital
                  </Link></li>

                <li><Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/blog">
                  Blog
                  </Link></li>

                <li><Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/contact">
                  Contact
                  </Link></li>
            </ul>
            
        </nav>
      
        </header>
    )
}

export default Header;
