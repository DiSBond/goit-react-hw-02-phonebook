import React from "react";
import propTypes from 'prop-types';

const ContactListElement = ({id, name, number, onDelete}) => {
return (
    <div>{name}: {number}
        <button onClick={() => onDelete(id)}>Удалить</button>
    </div>
)
}

export default ContactListElement

ContactListElement.propTypes = {
    id: propTypes.string,
    name: propTypes.string,
    number: propTypes.string,
    onDelete: propTypes.func,
}