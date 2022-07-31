import React, {useState} from 'react'
import { MemoizedChildFour } from './ChildFour';
import MemoizedChildThree from './ChildThree';


const ParentThree = ({children}) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Charles')

    console.log('ParentThree Render');
  return (
    <div>
      <button onClick={()=> setCount(c => c+1)}>Count - {count}</button>
      <button onClick={()=> setName('CodeEvolution')}>Change Name</button>
      <MemoizedChildFour name={name}/>
        {/* <MemoizedChildThree name={name}> <strong>Hello</strong> </MemoizedChildThree> */}
    </div>
  )
}

export default ParentThree
