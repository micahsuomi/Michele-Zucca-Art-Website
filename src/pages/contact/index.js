import React, { Component } from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/layout';
import Head from '../../components/head'
import contactStyles from './styles.module.scss';

const encode = (data) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
//   const Contact = () => {
//     const [state, setState] = React.useState({})

class Contact extends Component {
    state = {}

     handleChange = (e) => {
      let {name, value} = e.target
      this.setState({ ...this.state, [name]: value })
      console.log(name, value)
    }
  
     handleSubmit = (e) => {
      e.preventDefault()
      const form = e.target
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...this.state,
        }),
      })
        .then(() => navigate(form.getAttribute('action')))
        .catch((error) => alert(error))
    }
    render() {
        return (
            <Layout>
                <Head />
              <div className={contactStyles.container}>
              <h1>Contact Me</h1>
              <form
                name="contact"
                method="post"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className={contactStyles.form}
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don’t fill this out: <input name="bot-field" onChange={this.handleChange}/>
                  </label>
                </p>
                <p>
                  <label>
                    Your name:
                    <br />
                    <input type="text" 
                    name="name" 
                    onChange={this.handleChange}
                    className={contactStyles.name} />
                  </label>
                </p>
                <p>
                  <label>
                    Your email:
                    <br />
                    <input type="email" 
                    name="email" 
                    onChange={this.handleChange}
                    className={contactStyles.email} />
                  </label>
                </p>
                <p>
                  <label>
                    Message:
                    <br />
                    <textarea 
                    name="message" 
                    onChange={this.handleChange}
                    className={contactStyles.message} />
                  </label>
                </p>
                <p>
                  <button type="submit" className={contactStyles.submitBtn}>Send</button>
                </p>
              </form>
              </div>
            </Layout>
          )
    }
    
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
