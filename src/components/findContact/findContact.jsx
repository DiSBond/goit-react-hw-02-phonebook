
import React from 'react'
import { FcContatiner } from './findContact.styled'
import propTypes from 'prop-types';

const FindContact = ({filter, onChange}) => {
    return (
        <FcContatiner>
          <label>Find contacts by name
              <input type="text" value={filter} onChange={onChange}/>
          </label>
        </FcContatiner>
      )
}

export default FindContact

FindContact.propTypes ={
  filter: propTypes.string,
  onChange: propTypes.func,
}