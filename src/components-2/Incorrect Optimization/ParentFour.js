import React, {useState, useMemo, useCallback} from 'react'
import { MemoizedChildFive } from './ChildFive';


const ParentFour = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('Charles')

    const person = {
        fname: 'Bruce',
        lname: 'Wayne'
    }

    // optimized child re-rendering 
    const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => {}

    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentFour Render');
  return (
    <div>
      <button onClick={()=> setCount(c => c+1)}>Count - {count}</button>
      <button onClick={()=> setName('CodeEvolution')}>Change Name</button>
      <MemoizedChildFive name={name} person={memoizedPerson}/>
      <MemoizedChildFive name={name} memoizedHandleClick={memoizedHandleClick}/>
    </div>
  )
}

export default ParentFour
