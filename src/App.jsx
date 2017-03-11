import React, { Component } from 'react';
import { Messages, Responses } from './components/chat';

export const postMessage = (state, msg) => {
  state.push(msg);
};

// The actual app
export class App extends Component {
  constructor(props) {
    super(props);
    const welcomeMessage = props.conversation[0];

    this.state = {
      messages: [welcomeMessage],
      responses: welcomeMessage.replies,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const messages = this.state.messages;
    const userMessage = {
      value: e.target.innerHTML,
      fromMe: true,
    };
    const nextMessage = this.props.conversation.find(
      element => element.id === e.target.dataset.next
    );

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
