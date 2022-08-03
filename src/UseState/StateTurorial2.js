import React, {useState} from 'react'

const StateTutorial2 = () => {

    const [inputValue, setInputValue] = useState('Charles');

    let onChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
    } 

  return (
    <div>
        <input onChange={onChange}  placeholder='Enter something here...' type="text" />
      {inputValue} 
    </div>
  )
}

export default StateTutorial2
