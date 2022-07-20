import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput() 
    }
    
  render() {
    return (
      <div>
        <Input ref={this.componentRef}/>
        {/* when we click on the focus input button in the parent element [FocusInput.js], the child element [Input.js] should recieve the focus  */}
        {/* NOTE: refs can only be class components and NOT functional components */}
        <button onClick={this.clickHandler }>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
