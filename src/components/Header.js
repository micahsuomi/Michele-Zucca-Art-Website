import React, { useState } from 'react';
import { Link } from 'gatsby';
// import './header.module.scss';
import headerStyles from './header.module.scss';
import './navbar.css';
import toggleBar from '../imgs/toggle-bar.svg';


  
const Header = ( {title, subtitle} ) => {
  
    const [isClicked, setState] = useState(false)
    let navLinksClass = ['nav-links']
    let navLinksClassOpen = ['nav-links open']
       
            const toggle = () => {
              setState(!isClicked) 
 
          }

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
          <div onClick={toggle}>
            <img src={toggleBar} alt="toggle-bar" 
            className={headerStyles.hamburger} 
            style={isClicked ? style1 : style2}
            />
          </div>
        
            <ul className={isClicked ? navLinksClassOpen : navLinksClass}>
                <li>  
                <Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/"
                >
                
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

let style1 = {backgroundColor : 'white', padding: '.5rem', borderRadius: '3px'}
let style2 = {backgroundColor : 'none'}

export default Header;
