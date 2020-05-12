import React, { useState } from 'react';
import { Link } from 'gatsby';
import headerStyles from './styles.module.scss';
import './style.css';
  
const Header = ( {title, subtitle} ) => {
  
    const [isClicked, setState] = useState(false);
    let navLinksClass = ['nav-links'];
    let navLinksClassOpen = ['nav-links open'];

    let lineClassOne = ['line top'];
    let lineClassOneActive = ['line top active'];

    let lineClassTwo = ['line middle'];
    let lineClassTwoActive = ['line middle active'];

    let lineClassThree = ['line bottom'];
    let lineClassThreeActive = ['line bottom active'];

       
            const toggle = () => {
              setState(!isClicked) 
 
          }

    return (
        <header>
          <div className={headerStyles.titleWrapper}>
        <Link to ="/" className={headerStyles.title}>
        <h2>{title}</h2>
        <p className={headerStyles.subtitle}>
        {subtitle}
        </p>
        </Link>
        </div>

        <div>
        <nav>
          <div className={headerStyles.toggleWrapper}>
          <div className={headerStyles.toggleBar} onClick={toggle} style={isClicked ? styleBorder : styleNoBorder}>
            <span className={isClicked ? lineClassOneActive : lineClassOne}></span>
            <span className={isClicked ? lineClassTwoActive : lineClassTwo}></span>
            <span className={isClicked ? lineClassThreeActive : lineClassThree}></span>
          </div>
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

                <li>
                <details>
                <summary activeClassName={headerStyles.activeNavItem}> Portraits</summary>
                <ul className={headerStyles.nestedNavList}>
                <li>
                <Link className={headerStyles.navItemNested} 
                to ="/helsinkifirstbatch">
                  Helsinki First Batch
                  </Link>
                  </li>
                  <li>
                  <Link className={headerStyles.navItemNested} 
                to ="/helsinkisecondbatch">
                  Helsinki Second Batch
                  </Link>
                  </li>

                  <li>
                  <Link className={headerStyles.navItemNested} 
                to ="/thelordandthenewcreatures">
                  The Lord and The New Creatures
                  </Link>
                  </li>

                  </ul>
                  </details>

                  </li>
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

                  <li>
                <details>
                <summary activeClassName={headerStyles.activeNavItem}> Photography</summary>
                <ul className={headerStyles.nestedNavList}>
                <li>
                <Link className={headerStyles.navItemNested} 
                to ="/allegories">
                  Allegories
                  </Link>
                  </li>
                  <li>
                  <Link className={headerStyles.navItemNested} 
                to ="/playingwiththelightsofsydney">
                  Playing With The Lights Of Sydney
                  </Link>
                  </li>
                  <li>
                  <Link className={headerStyles.navItemNested} 
                to ="/whiletraveling">
                  While Travelling
                  </Link>
                  </li>
                  </ul>
                  </details>

                  </li>

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

                  {/* <li><Link className={headerStyles.navItem} 
                activeClassName={headerStyles.activeNavItem} 
                to ="/calendly">
                  Book a meeting
                  </Link></li> */}
            </ul>
            
        </nav>
        </div>
      
        </header>
    )
}

const styleBorder = {border: '1px solid white', borderRadius: '500px'}
const styleNoBorder = {border: 'none'}

export default Header;
