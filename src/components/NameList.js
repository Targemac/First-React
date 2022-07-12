import React from 'react'
import Person from './Person'

// LIST RENDERING 
function NameList() {

    // ---------------METHOD 1
//     const names = ['Bruce', 'Clark', 'Diana','charles']
//     const nameList = names.map(name => <h2>{name}</h2>)

//   return (
//     <div>
//       {
//         nameList
//       }
//     </div>
//   )


  // ---------------METHOD 2
  const persons = [
    {
        id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React'
    },
    {
        id: 2,
        name: 'Clark',
        age: 25,
        skill: 'Angular'
    },
    {
        id: 3,
        name: 'Diana',
        age: 28,
        skill: 'Vue'
    }
  ]

    //   importing the person component and passing it as a props to the personlist component 
  const personList = persons.map(person => <Person key={person.id} person={person}></Person> )

    return (
        <div>
          {
            personList
          }
        </div>
    )

}

export default NameList
