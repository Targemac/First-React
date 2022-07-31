import React, {useState} from 'react'
import ChildOne from './ChildOne'
import ParentOne from './ParentOne'

const GrandParent = () => {

    const [newCount, setNewCount] = useState(0)
  return (
    <div>
      <button onClick={() => setNewCount((nc) => nc + 1)}>GrandParent Count - {newCount}</button>
      <ParentOne newcount={newCount}>
        <ChildOne/>
      </ParentOne>
    </div>
  )
}

export default GrandParent