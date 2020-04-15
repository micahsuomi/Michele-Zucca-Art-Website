import React from "react";
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import '../styles/index.scss';
import Head from '../components/Head';


const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hello World</h1>
            <h2>I am Michele, a Fullstack developer living in Helsinki</h2>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
        </Layout>
    )
        
}

export default IndexPage;