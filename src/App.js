import React, { Component } from 'react';
import './App.css';
import mockConversation from './mockConversation';

export const postMessage = (state, msg) => {
  // if(!msg.author) return new Error('Whoops!')
  state.push(msg);
}

const Messages = ({messages}) => {
  const MessageFeed = messages.map((msg, i) => {
    return (
      <Message
        key={i}
        message={msg} />
    );
  });

  return (
    <div>
      {MessageFeed}
    </div>
  );
}

const Message = ({message}) =>
  <div>
    {message.value}, by {message.user}
  </div>

// Render a list of possible responses for the user to 
const Responses = ({responses}) => {
  debugger;
  const ResponseList = responses.map((response, i) => {
    return (
      <Response
        key={i}
        response={response} />
    );
  })
  return (
    <div>
      {ResponseList}
    </div>
  )
}

// A single response item
const Response = (props) =>
  <div>
    <button onClick={props.onMessageSubmit}>{props.response}</button>
  </div>

export class App extends Component {
  constructor(props) {
    super(props)
    const welcomeMessage = mockConversation[0];
    this.state = {
      messages: [welcomeMessage],
      responses: [welcomeMessage.responses]
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    const newMessage = {
      user: 'user',
      value: e.target.innerHTML
    }

    const messages = this.state.messages;
    postMessage(messages, newMessage)

    this.setState({ messages });
  }

  componentWillUpdate() {
    // When a new message is posted, log that message key
  }

  render() {
    return (
      <div className="App">
        <h1>React Chat</h1>
        <Messages messages={this.state.messages} />
        <Responses responses={this.state.responses} onMessageSubmit={this.handleSubmit} />
      </div>
    );
  }
}