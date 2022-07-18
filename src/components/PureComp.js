import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('********** Pure Comp render **********');
    //pure comp chech previous props/state with current 
    //props/state to see if there is a diff then re-renders
    //pure comps prevents unnecesary render and gives a performance boost
    return (
      <div>
        Pure component {this.props.name}
      </div>
    )
  }
}

export default PureComp
