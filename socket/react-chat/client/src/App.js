import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

const ENDPOINT = 'http://127.0.0.1:3001'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messageText: '',
      messages: []
    }
    this.socket = socketIOClient(ENDPOINT)
  }

  componentWillMount = () => {
    this.socket.on('chat message', message => {
      this.setState(prevState => ({
        messages: [...prevState.messages, <li>{message}</li>]
      }))
    })
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
        <ul id="messages">{this.state.messages}</ul>
        <form id='form' onSubmit={this.handleSubmit}>
          <input id='input' type='text' value={this.state.messageText} onChange={this.handleChange} />
          <button type='submit'>Send</button>
        </form>
      </>
    )
  }
}

export default App
