import React,{Component} from 'react'
import axios from 'axios'
import './ContactForm.css'

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
          name: '',
          email: '',
          message: '',
        };
      }

      onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const { name, email, message } = this.state;

        axios.post('/send', { name, email, message })
          .then((res) => {
            console.log(res)
          });
      }


    render(){
        return(
            <div className="contact-form">
                <form onSubmit={this.onSubmit}>
                
                <label htmlFor="name">name:</label>
                <input id="name" name="name" type="text" value={this.state.name} onChange={this.onChange}/>

                <label htmlFor="email">email address:</label>
                <input id="email" name="email" type="email" value={this.state.email} onChange={this.onChange}/>

                <label htmlFor="message">message:</label>
                <textarea id="message" name="message" type="text" value={this.state.message} onChange={this.onChange}/>

                <button type="submit">Send Message</button>
                
                </form>
            </div>
        )
    }
}

export default ContactForm