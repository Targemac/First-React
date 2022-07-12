import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2> iam {person.name}, iam {person.age}yrs old. I know {person.skill} </h2> 
    </div>
  )
}

export default Person
