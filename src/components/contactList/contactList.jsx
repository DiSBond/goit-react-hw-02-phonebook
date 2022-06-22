

import React, { Component } from 'react'

import { ContactListStl } from './contactList.styled'

export default class ContactList extends Component {
  render() {
    return (
      <div>
      <ContactListStl>
        {this.props.visibleContacts.map(contact => {
          return (<li key={contact.id}>{contact.name}: {contact.number}<button onClick={() => this.props.onDeleteContact(contact.id)}>Удалить</button></li>)
        })}
      </ContactListStl>
      </div>
    )
  }
}


