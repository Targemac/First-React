import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

 class LifeCycleA extends Component {
    // order of execution during mounting phase 
    constructor(props) {
      super(props)
    
      this.state = {
         name: "Charles"
      }
      console.log('LifeCycleA Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate');
        return  true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('LifeCycleA getSnapshotBeforeUpdate');
      return null
    }

    componentDidUpdate(){
      console.log('LifeCycleA componentDidUpdate');
    }

    changeState = () =>{
      this.setState({
        name: 'Codevolution'
      })
    }
    
  render() {
    console.log('LifeCycleA Render');
    return(
        <div>
            <div>LifeCycle  A</div>
            <button onClick={this.changeState}>Chane State</button>
            <LifeCycleB />
        </div>
    ) 
  }
}

export default LifeCycleA
