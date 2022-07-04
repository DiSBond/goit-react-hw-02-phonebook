import React from "react";

const ContactListElement = ({id, name, number}) => {
return (
    <li key={contact.id}>{contact.name}: {contact.number}
        <button onClick={() => this.props.onDeleteContact(contact.id)}>Удалить</button>
    </li>
)
}

export default ContactListElement