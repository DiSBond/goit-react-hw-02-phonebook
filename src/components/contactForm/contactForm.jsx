
import React, { Component } from "react";
import { ContactFormSt } from "./contactForm.styled";

// rcc->  == class component skeleton
// rsc->  == stateless component skeleton
// rsf->  == stateless named function skeleton

export default class ContactForm extends Component {
    state = {
        name: '',
        number: '',
      }

    addContact = e => {
        this.setState({name: e.currentTarget.value})
      }
    
    addNumber = e => {
      this.setState({number: e.currentTarget.value})
    }

    
  onButtonClick = e => {
    e.preventDefault()

    this.props.onSubmit(this.state)

    this.setState({name: "", number: ""})

  }
    
  render() {
    
    return (
      <div>
        <ContactFormSt onSubmit={this.onButtonClick}>
            <label>
              Name
              <br />
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.addContact}
                value={this.state.name}
              />
            </label>
            <label>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.addNumber}
                value={this.state.number}
              />
            </label>
            <button type="submit">Add contact</button>
        </ContactFormSt>
      </div>
    )
  }
}

