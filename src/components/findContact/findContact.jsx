
import React from 'react'
import { FcContatiner } from './findContact.styled'

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