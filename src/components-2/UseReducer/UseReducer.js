import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state, action) =>{
  // returns new state, the state depends on the action 
  switch (action) {
    case 'increment': return state + 1
    case 'decrement': return state - 1
    case 'reset': return initialState
    default: return state 
      
  }
}

const UseReducer = () => {

  const [count, dispatch] =  useReducer(reducer, initialState)
  console.log('UseReducer Render')

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducer

// in useState, we have the setter function
// in useReducer, we have the dispatch function