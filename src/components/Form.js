import React, { Component } from 'react'

class Form extends Component {

    //   -------------STEPS IN FORM HANDLING--------- 
    //   1. CREATE HTML ELEMENT 
    //   2. SET STATE 
    //   3. SET EVENT HANDLER 

    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comment: '',
         topic: 'React',

      }
    }

    handleUsernameChange = (event) =>{
        this.setState({ 
            username: event.target.value
        })
    }

    handleCommentChange = (event) =>{
        this.setState({
            comment: event.target.value
        })
    }

    handleTopicChange = event =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
        event.preventDefault();    //this is to avoide reseting form after submit
    }
    
  render() {

    const {username, comment, topic} = this.state;

    return (
      <form onSubmit={this.handleSubmit} >
        <div>
            <label>Username : </label>
            <input type="text" value={username} onChange={this.handleUsernameChange} placeholder='username' />
        </div>
        <div>
            <label>Comment : </label>
            <textarea value={comment} onChange={this.handleCommentChange} cols="30" rows="3"></textarea>
        </div>
        <div>
            <label>Topic : </label> 
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="react" key="">React</option>
                <option value="angular" key="">Angular</option>
                <option value="vue" key="">Vue</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default Form
