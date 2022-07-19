import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    componentDidMount() {
        //below used to focus automatically on input element when page is loaded
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }

    clickHandler = () =>{
        //used to get input value of current focused element
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
