import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import gatsbyImg from '../../imgs/gatsby-logo.png';
import footerStyles from './styles.module.scss';

const Footer = ( {author, link} ) => {
    console.log(link)
   
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.left}>
            <p>Created by {author} with Gatsby JS, 2020</p>
            <img src={gatsbyImg} alt="gatsby site generator" />
            </div>
            <div className={footerStyles.right}>
                <a href='https://www.linkedin.com/in/michele-zucca/' target="blank">
                    <FaLinkedin size={30} className={footerStyles.socialIcon}/></a>
                <a href='https://www.instagram.com/mikibright_z/' target="blank">
                    <FaInstagram size={30}  
                className={footerStyles.socialIcon}/></a>
                <a href='https://www.facebook.com/michele.zucca.18' target="blank">
                    <FaFacebook size={30} className={footerStyles.socialIcon}/></a>
                <a href='https://github.com/micahsuomi' target="blank">
                    <FaGithub size={30} className={footerStyles.socialIcon}/></a> 

            </div>
        </footer>
    )
}

export default Footer;
