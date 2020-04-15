import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/Layout';
import Head from '../components/Head';

const AboutPage = () => {
    return (
        <div>
            <Layout>
            <Head title="About" />
            <h1>About Me</h1>
            <p>Bio: I am a fullstack developer studying at Integrify. This is my very first Gatsby site</p>
            <p>Need a developer? <Link to="/contact">Contact Me</Link></p>
            </Layout>
        </div>
    )
}

export default AboutPage;