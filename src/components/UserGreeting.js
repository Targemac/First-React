import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
    //-------- CONDITIONAL RENDERING ------------
    render() {

        // ----------methode 1------------
        // if (this.state.isLoggedIn) {
        //     return <div>welcome Charles</div>
        // } else {
        //     return <div>welcome Guest</div>
        // }
        

        // ----------methode 2------------
        // let message 
        // if (this.state.isLoggedIn) {
        //     message =  <div>welcome Charles</div>
        // } else {
        //     message = <div>welcome Guest</div>
        // }
        
        // return <div>{message}</div>

        // ----------methode 3------------ 
        // return(
        //     this.state.isLoggedIn ? <div>welcome charles !</div> : <div>welcome guest !</div>
        // )

        // ----------methode 4------------ 
        return this.state.isLoggedIn && <div title='Hi'>welcome charles !</div>

    }


}

export default UserGreeting
