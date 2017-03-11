import React, { Component } from 'react';


export const postMessage = (state, msg) => {
  state.push(msg);
}

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
    <span>{message.value}</span><br/>
    <i>{message.user}</i>
  </div>

// 🗣 A list of possible responses
const Responses = (props) => {
  const ResponseList = props.responses.map((response, i) => {
    return (
      <Response
        key={i}
        response={response}
        onClick={props.onMessageSubmit} />
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
    const welcomeMessage = props.conversation[0];

    this.state = {
      messages: [welcomeMessage],
      responses: welcomeMessage.replies
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){		
    const messages = this.state.messages;		
    let userMessage = {
      value: e.target.innerHTML,
      user: 'user'
    }
    const nextMessage = this.props.conversation.find(element=>element.id===e.target.dataset.next)

    postMessage(messages, userMessage);
    postMessage(messages, nextMessage);

    this.setState({ messages });
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