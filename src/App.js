import React, { Component } from 'react';
import './App.css';

export const postMessage = (state, msg) => {
  // if(!msg.author) return new Error('Whoops!')
  state.push(msg);

}
// const postRandomMessage = state => state.push(mockMessages[Math.floor(Math.random() * 10)])

const Messages = ({messages}) => {
  const messageFeed = messages.map((msg, i) => {
    return (
      <Message
        key={i}
        message={msg} />
    );
  });

  return (
    <div>
      {messageFeed}
    </div>
  );
}

const Message = ({message}) =>
  <div>
    {message.value}, by {message.user}
  </div>

const ChatInput = (props) =>
  <div>
    <button onClick={props.onMessageSubmit}>🚁</button>
    <button onClick={props.onMessageSubmit}>🥐</button>
  </div>

export class App extends Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }

    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    // const newMessage = {
    //   user: 'gaga',
    //   value: e.target.innerHTML
    // }

    // const messages = this.state.messages;
    // postMessage(messages, newMessage)

    // this.setState({ messages });
  }

  componentWillUpdate() {
    // When a new message is posted, log that message key
   }

  render() {
    return (
      <div className="App">
        <h1>React Chat</h1>
        <Messages messages={this.state.messages} />
        <ChatInput onMessageSubmit={this.handleSubmit} />
      </div>
    );
  }
}