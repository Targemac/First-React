
import React from 'react'

// CREATING A FUNCTIONAL COMPONENT 
export const Greet = (props) => {
    const {name, heroName} = props //destructuring
    // console.log(props);
    return(
        <div>
           <h1>Hello {name} a.k.a {heroName} !  </h1>
        </div>
        
    )  
    
}


export default Greet;