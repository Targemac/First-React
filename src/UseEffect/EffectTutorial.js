import React, { useEffect, useState } from 'react';
import axios, { Axios } from 'axios';

// useEffect is called whenever a page re-renders 


const EffectTutorial = () => {

    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    //eg. lets console a message immediately a website opens 
    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            
            setData(response.data[0].email)
            console.log('API was called');
            
        })
    }, [count])

  return (
    <div>
      Hello World {data} <br/>
      {count} <br/>
      <button onClick={()=>{setCount(count + 1)}}>
        Click
      </button>
    </div>
  )
}

export default EffectTutorial
