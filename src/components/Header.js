import React, { useState } from 'react';
import { Link } from 'gatsby';
// import './header.module.scss';
import headerStyles from './header.module.scss';
import './navbar.css';
import toggleBar from '../imgs/toggle-bar.svg';

let testStyles = [ 

  {clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)'},  
  {clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'}
    
  ]

  let style1 = {backgroundColor: 'red'}
  let style2 = {backgroundColor: 'green'}

      
    
  

const Header = ({title, subtitle}) => {
    //it will allowe us to query the graphql api
    


    let [state, setState] = useState({})
    let navLinksClass = ["nav-links"];

   
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
              
              state = {
                isClicked: !state.isClicked, 
                addClass: !state.addClass, 
                hideClass: !state.hideClass, 
                isToggleShowing: false, 
                isExitShowing: true
                }

                console.log('isclicked', state.isClicked)
                if(state.isClicked && state.addClass) {
                  console.log('closing')
                  navLinksClass.splice(1)
                  console.log(navLinksClass)
                } else if(state.isClicked === false && state.addClass === false){
                  console.log(navLinksClass)
                  navLinksClass.push('open')
                  console.log('closing')
                  
                }
 
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
      
          
    console.log(navLinksClass) 
  

    return (
        <header>
          <div>
        <Link to ="/" className={headerStyles.title}>
        <h2>{title}</h2>
        <p className={headerStyles.subtitle}>
        {subtitle}
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

                  <li><Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/calendly">
                  Book a meeting
                  </Link></li>
            </ul>
            
        </nav>
        </div>
      
        </header>
    )
}



export default Header;
