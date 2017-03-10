import React, { Component } from 'react';
import './App.css';
import mockConversation from './mockConversation';

// 📢 A stream of messages
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

// A single message
const Message = ({message}) =>
  <div>
    {message.value}, by {message.user}
  </div>

// 🗣 A list of possible responses
const Responses = (props) => {
  const handleClick = e => {
    console.log(e.target.dataset.next)}

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

// A single response
const Response = (props) =>
    <button data-next={props.response.next} onClick={props.onClick}>{props.response.value}</button>

// The actual app
export class App extends Component {
  constructor(props) {
    super(props)
    const welcomeMessage = mockConversation[0];

    this.state = {
      messages: [welcomeMessage],
      responses: welcomeMessage.replies
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    
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