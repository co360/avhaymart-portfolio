import React,{Component} from 'react'
import './ContactForm.css'

class ContactForm extends Component {
    render(){
        return(
            <div className="contact-form">
                <form action="post">
                
                <label htmlFor="name">name:</label>
                <input id="name" type="text"/>

                <label htmlFor="email">email address:</label>
                <input id="email" type="email"/>

                <label htmlFor="message">message:</label>
                <textarea id="message" type="text"/>

                <button type="submit">Send Message</button>
                
                </form>
            </div>
        )
    }
}

export default ContactForm