
import React, { Component } from "react";
import shortid from "shortid";
import ContactForm from "./contactForm/contactForm";
import FindContact from "./findContact/findContact";
import ContactList from "./contactList/contactList";

// ----------- CSS ----------- //
import { MainContainer, Title } from "./App.styled";

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

 addNewContact = newContact => {
    const contact = {
      id: shortid.generate(),
      ...newContact
    }

    const newArray = this.state.contacts.filter(contact => contact.name.toLowerCase() === newContact.name.toLowerCase())
    

    if (newArray.length > 0) {
      return alert(`${newContact.name} is already in contacts`) 
    }
    this.setState(prevState => ({contacts: [...prevState.contacts, contact]}))

  }

  deleteContact = ContactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== ContactId)
    }))
  }

  findContact = e => {
    this.setState({filter: e.currentTarget.value})
  }  

  componentDidMount() {
    
    const contacts = localStorage.getItem('contacts');
    const parsedContacs = JSON.parse(contacts);

 

    if (parsedContacs) {
      this.setState({contacts: parsedContacs})
    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))

    }
  }

  render() {

    const filterNormalizes = this.state.filter.toLowerCase()

    const visibleContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalizes))

    return (
      <MainContainer>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.addNewContact}/>
        <FindContact filter={this.state.filter} onChange={this.findContact}/>
        <Title>Contacts</Title>
        <div>
          {ContactList(visibleContacts, this.deleteContact)}
        </div>
      </MainContainer>
    )
  }
}

