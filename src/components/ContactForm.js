import React, { Component } from 'react';
import '../css/ContactForm.css';
class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.addContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div className="contact-div">
        <form onSubmit={this.handleSubmit} className="contact-form">
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
                className="contact-input"
            />
            <input
                type="tel"
                name="number"
                placeholder="Phone Number"
                value={number}
                onChange={this.handleChange}
                className="contact-input"
            />
            <button type="submit" className="button-submit">Add contact</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;