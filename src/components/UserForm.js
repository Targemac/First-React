import React, {useState} from 'react'
import useInput from '../hooks/useInput'

function UserForm() { 

     const [firstName, bindFirstName, resetFirstName] = useInput('')
     const [lastName, bindLastName, resetLastName] = useInput('')


    const submitHandler = e =>{
        e.preventDefault();
        alert(`hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label> First name  </label>
            {/* //use spread operator when specifying as an attrbute */}
            <input {...bindFirstName} type="text" />
        </div>
        <div>
            <label> Last name  </label>
            {/* //use spread operator when specifying as an attrbute */}
            <input {...bindLastName} type="text" />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
