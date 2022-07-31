import React from 'react'

const ChildFour = ({name}) => {
    const date = new Date()
    console.log('childFour render');
  return (
    
    <div>
      Hello {name}. It is currently {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
    </div>
  )
}


export const MemoizedChildFour = React.memo(ChildFour)
