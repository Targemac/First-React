import React, { Component } from 'react'

 class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //   3rd method activates 1st method from below
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.setState({
            message: 'Goodbye!'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* .bind(this): used below to bind the 'this keyword to this particular event' */}

        {/* 1st method */}
        {/* <button onClick={this.clickHandler}>Click</button>  */}

        {/*2nd method*/}
        <button onClick={()=> this.clickHandler()}>Click</button> 
      </div>
    )
  }
}

export default EventBind
