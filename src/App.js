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
const Responses = (props) => {
  const handleClick = e => 
    console.log(e.target.innerHTML)

  const ResponseList = props.responses.map((response, i) => {
    return (
      <Response
        key={i}
        response={response}
        onClick={handleClick} />
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
    <button onClick={props.onClick}>{props.response.value}</button>

export class App extends Component {
  constructor(props) {
    super(props)
    const welcomeMessage = mockConversation[0];

    this.state = {
      messages: [welcomeMessage],
      responses: welcomeMessage.replies
    }
  }
  // every bot message can invoke another message and declare the next set of responseses
  // A response specifies which bot message to fire
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