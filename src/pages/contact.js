import React from 'react';
import Layout from '../components/Layout';
import { navigate } from 'gatsby-link'

import Head from '../components/Head';

function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  const Contact = () => {
    const [state, setState] = React.useState({})
  
    const handleChange = (e) => {
      setState({ ...state, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }
  
    return (
      <Layout>
          <Head />
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input type="text" name="name" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input type="email" name="email" onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name="message" onChange={handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    )
  }

  export default Contact
// const ContactPage = () => {
//     return (
//         <div>
//             <Layout>
//             <Head title="Contact"/>
//             <h1>Contact</h1>
//                         <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
//             {/* You still need to add the hidden input with the form name to your JSX form */}
//             <input type="hidden" name="form-name" value="contact" />
//             ...
//             </form>
//             <p>Name: Michele Zucca</p>
//             <p>Email: michele.zucca@integrify.io</p>
//             <p><a href="https://github.com/micahsuomi" target="blank">My Github</a></p>
//             </Layout>
//         </div>
//     )
// }

// export default ContactPage;
