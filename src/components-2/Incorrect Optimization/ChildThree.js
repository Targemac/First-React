import React from 'react'

const ChildThree = () => {

    console.log('ChildThree Render');
  return (
    <div>
      ChildThree ComponeThree
    </div>
  )
}

export default ChildThree

export const MemoizedChildThree = React.memo(ChildThree)