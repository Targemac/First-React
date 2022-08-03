import React, {useState} from 'react'

const StateTutorial = () => {

    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1)
        // counter = counter + 1;
        console.log(counter);
    };

  return (
    <div>
      {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}

export default StateTutorial
