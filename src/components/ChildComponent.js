import React from 'react'

function ChildComponent(props) {


    return (
        <div>
            {/* recieveing a method as props from parent to execute a function in parent   */}
            <button onClick={()=> props.greetHandler('Child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
