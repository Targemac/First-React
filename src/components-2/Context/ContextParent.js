import React, {useState} from 'react'
import {ChildA, MemoizedChildA} from './ContextChildren'

// here, we are using a useContext to display value from parent to child C 

export const CountContext = React.createContext()
const CountProvider = CountContext.Provider

export const ContextParent = ({children}) => {

    const [count, setCount] = useState(0)

    console.log('ContextParent Render');
    
  return (
    <>
      <button onClick={()=>setCount(c => c+1)}>Count - {count}</button>
      <CountProvider value={count}>
        {children}
      </CountProvider>
      
    </>
  )
}


