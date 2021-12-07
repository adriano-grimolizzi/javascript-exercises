import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

const ENDPOINT = 'http://127.0.0.1:3001'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { messageText: '' }
    this.socket = socketIOClient(ENDPOINT)
  }

  handleChange = event => {
    this.setState({ messageText: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.messageText) {
      this.socket.emit('chat message', this.state.messageText)
      this.setState({ messageText: '' })
    }
  }

  render() {
    return (
      <>
        <form id='form' onSubmit={this.handleSubmit}>
          <input id='input' type='text' value={this.state.messageText} onChange={this.handleChange} />
          <button type='submit'>Send</button>
        </form>
      </>
    )
  }
}

export default App
