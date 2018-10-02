import React, { Component } from 'react'
import axios from 'axios'

import './ContactForm.css'

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            displayLoad:false,
            displayForm:true,
            displayResponse:false,
            response:'',
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

        this.setState({displayForm:false});
        this.setState({displayLoad:true});


        // get our form data out of state
        const { name, email, message } = this.state;

        axios.post('/send', { name, email, message })
            .then((res) => {
                if (res.status === 200) {
                    console.log("success")
                    this.setState({displayLoad:false});
                    this.setState({response:"Message sent. You will receive a response within 24 to 48 hours."})
                    this.setState({displayResponse:true})
                }
            }).catch((err) => {
                    this.setState({displayLoad:false});
                    this.setState({response:"An internal server error occured. Your message may not have been sent."})
                    this.setState({displayResponse:true})
            });
    }


    render() {
        return (
            <div className="contact-form">
                <form style={this.state.displayForm ? {display:'flex'} : {display:'none'}} onSubmit={this.onSubmit}>

                    <label htmlFor="name">name:</label>
                    <input id="name" name="name" type="text" required value={this.state.name} onChange={this.onChange} />

                    <label htmlFor="email">email address:</label>
                    <input id="email" name="email" type="email" required value={this.state.email} onChange={this.onChange} />

                    <label htmlFor="message">message:</label>
                    <textarea id="message" name="message" type="text" required value={this.state.message} onChange={this.onChange} />

                    <button type="submit">Send Message</button>

                </form>

                    <img style={this.state.displayLoad ? {display:'block'} : {display:'none'}} className="loading" src="./img/loading.svg" alt="Sending" />
            
                    <p style={this.state.displayResponse ? {display:'block'} : {display:'none'}}>{this.state.response}</p>
            </div>
        )
    }
}

export default ContactForm