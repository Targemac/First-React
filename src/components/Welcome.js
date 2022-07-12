import React, {Component} from 'react';

// CREATING A CLASS COMPONENT 
class Welcome extends Component{
    render(){
        const {name, heroName} = this.props //destructuring
        return <h1>Welcome {name} a.k.a {heroName} </h1>
    }
}

export default Welcome;