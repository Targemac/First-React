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

  // const persons = [
  //   {
  //       id: 1,
  //       name: 'Bruce',
  //       age: 30,
  //       skill: 'React'
  //   },
  //   {
  //       id: 2,
  //       name: 'Clark',
  //       age: 25,
  //       skill: 'Angular'
  //   },
  //   {
  //       id: 3,
  //       name: 'Diana',
  //       age: 28,
  //       skill: 'Vue'
  //   }
  // ]

    //   importing the person component and passing it as a props to the personlist component 
  // const personList = persons.map(person => <Person key={person.id} person={person}></Person> )

    // return (
    //     <div>
    //       {
    //         personList
    //       }
    //     </div>
    // )

    // ---------------METHOD 3
  const names = ['Bruce', 'Clark', 'Diana','charles','Bruce']
  //we use index in this case as key to avoide duplicate of key, because all key must be unique
  const nameList = names.map((name,index) => <h2 key={index}>{index}. {name}</h2> )

  return (
    <div>
      {
        nameList
      }
    </div>
  )

  // <-----------When to use INDEX as a key ---------------->
  // 1. the the items in your list do not have  a unique id 
  // 2. the list is a static list and will not change 
  // 3. the list will never be re-orderd or filtered 

}

export default NameList
