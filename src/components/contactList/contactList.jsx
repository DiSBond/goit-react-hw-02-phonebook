

import React, { Component } from 'react'

import { ContactListStl } from './contactList.styled'

import ContactListElement from 'components/contactElement/contactElement'

export default class ContactList extends Component {
  render() {
    return (
      <div>
      <ContactListStl>
        {this.props.visibleContacts.map(contact => {
          return (<ContactListElement id={contact.id} name={contact.name} number={contact.number}/>)
        })}
      </ContactListStl>
      </div>
    )
  }
}


