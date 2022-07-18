import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue',
    border: '.5px solid grey',
    backgroundColor:'lightgrey'
}

function Inline() {
  return (
    <div> 
      <h1 style={heading}>InLine</h1>
    </div>
  )
}

export default Inline
