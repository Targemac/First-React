import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Charles'
      }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Charles'
            })
        }, 2000)
    }
    
  render() {

    console.log('******************** Parent Comp render **********');

    return (
      <div>
        Parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name} ></RegComp> */}
        {/* <PureComp name={this.state.name}></PureComp> */}
      </div>
    )
  }
}

export default ParentComp
