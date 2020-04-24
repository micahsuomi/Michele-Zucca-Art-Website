import React, { useState } from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
// import './header.module.scss';
import headerStyles from './header.module.scss';
import './navbar.css';
import toggleBar from '../imgs/toggle-bar.svg';



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

    let isClicked
    let [state, setState] = useState([isClicked = false])
    
    state = { isToggleShowing: true,
              isExitShowing: false,
              addClass: false,
              hideClass: true,
              isClicked: false,
              isSwitched: false,
              isMarketClicked: false,
              isToolsClicked: false
            }

            const toggle = () => {
              navLinksClass.push("open");
              console.log(navLinksClass)


              setState({
                  isClicked: true, 
                  addClass: true, 
                  hideClass: !state.hideClass, 
                  isToggleShowing: false, 
                  isExitShowing: true})
                  console.log(state)
          }
        
          const close = () => {
              setState({
                  addClass: !state.addClass, 
                  isToggleShowing: true, 
                  isExitShowing: false})
        
          }
      
          const closeNavigation = () => {
              setState({
                  isClicked: true, 
                  addClass: !state.addClass,
                  isToggleShowing: true, 
                  isExitShowing: false,
                  isMarketClicked: false
      
              })
              console.log('close market')
            
      
          }
      
          const openMarket = (e) => {
              setState({isMarketClicked: true,
                        isToolsClicked: false})
              console.log('opening market')
          }
      
          const openTools = () => {
              setState({isToolsClicked: true,
                            isMarketClicked: false})
                              console.log('opening tools')
      
                              
          }
      
          const closeMarket = () => {
              setState({isMarketClicked: false})
              console.log('close market')
          }
      
          const closeTools = () => {
              setState({isToolsClicked: false});
              console.log('close tools')
          }
      
          let navLinksClass = ["nav-links"];
          let navDrowpDown = ["nav-dropdown"]
        
        
        if(state.addClass === false && state.isClicked === true) {
            navLinksClass.push("open");
            console.log(navLinksClass)
        }
            else if(state.addClass && state.isClicked === true) {
                navLinksClass.slice(1)
            }
        

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

        <div>
        <nav>
          <div>
            <img src={toggleBar} alt="toggle-bar" className={headerStyles.hamburger} onClick={toggle}
            />
          </div>
            <ul className={navLinksClass.join('')}>
                <li><Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/"
                onClick={closeNavigation}>
                
                  Home
                </Link></li>

                <li><Link className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem} 
                to ="/about">
                  About Me
                </Link></li>

                <details>
                <summary>Portraits</summary>
                <ul className={headerStyles.nestedNavList}>
                <li>
                <Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/helsinkifirst">
                  Helsinki First Batch
                  </Link>
                  </li>
                  <li>
                  <Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/helsinkisecond">
                  Helsinki Second Batch
                  </Link>
                  </li>
                  </ul>
                  </details>

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
        </div>
      
        </header>
    )
}

export default Header;
