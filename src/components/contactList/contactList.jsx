
import React, { Component } from 'react'
import { ContactListStl } from './contactList.styled'
import ContactListElement from 'components/contactElement/contactElement'
import propTypes from 'prop-types';

export default class ContactList extends Component {
  render() {
    return (
      <div>
      <ContactListStl>
        {this.props.visibleContacts.map(contact => {
          return (<li key={contact.id}>
            <ContactListElement id={contact.id} name={contact.name} number={contact.number} onDelete={this.props.onDeleteContact}/>
          </li>)
        })}
      </ContactListStl>
      </div>
    )
  }
}

ContactList.propTypes = {
  visibleContacts: propTypes.arrayOf(propTypes.object).isRequired
}
