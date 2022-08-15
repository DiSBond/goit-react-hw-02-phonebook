import { ContactListStl } from './contactList.styled';
import ContactListElement from 'components/contactElement/contactElement';
import propTypes from 'prop-types';

function ContactList(array, deleteContact) {
  return (
    <div>
      <ContactListStl>
        {array.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <ContactListElement
                id={id}
                name={name}
                number={number}
                onDelete={deleteContact}
              />
            </li>
          );
        })}
      </ContactListStl>
    </div>
  );
}

export default ContactList;

ContactList.propTypes = {
  array: propTypes.arrayOf(propTypes.object).isRequired,
};
