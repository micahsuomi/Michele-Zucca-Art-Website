import React from 'react';
import Layout from '../components/Layout';
import Head from '../components/Head';

const ContactPage = () => {
    return (
        <div>
            <Layout>
            <Head title="Contact"/>
            <h1>Contact</h1>
            <form name="contact" 
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field">
                <input type="text" placeholder="name"/>
                <button>Send</button>
            </form>
            <p>Name: Michele Zucca</p>
            <p>Email: michele.zucca@integrify.io</p>
            <p><a href="https://github.com/micahsuomi" target="blank">My Github</a></p>
            </Layout>
        </div>
    )
}

export default ContactPage;
