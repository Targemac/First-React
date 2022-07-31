import React from 'react'

const ChildTwo = () => {

    console.log('ChildTwo Render');
  return (
    <div>
      ChildTwo Component 
    </div>
  )
}

export default ChildTwo

export const MemoizedChildTwo = React.memo(ChildTwo)