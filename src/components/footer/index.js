import React from 'react';
import footerStyles from './styles.module.scss';

const Footer = ({author}) => {
   
    return (
        <footer className={footerStyles.footer}>
            <p>Created by {author}, 2020</p>
            <p>Site Built With Gatsby</p>
        </footer>
    )
}

export default Footer;
