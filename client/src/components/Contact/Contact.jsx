import React,{Component} from 'react';
import './Contact.css'

import ContactForm from '../ContactForm'

class Contact extends Component {
    render(){
        return(
            <div id="contact">
                <h2>{this.props.title}</h2>
                <p className="contact-subheading">Every time a message is sent, a dog gets a treat.</p>
                <ContactForm />
            </div>
        )
    }
}

export default Contact;