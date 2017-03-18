import React, { Component } from 'react';
import { Messages, Responses } from './components/chat';

function postMessages(messages) {
  let messagesToAdd = [ ...arguments ]
  return function update(state) {
    let newMessagesfeed = state.messages.slice();
    newMessagesfeed.push(...messagesToAdd);
    return {
      messages: newMessagesfeed
    }
  }
}

export class App extends Component {
  constructor(props) {
    super(props);
    const welcomeMessage = props.conversation[0];

    this.state = {
      messages: [welcomeMessage],
      responses: welcomeMessage.replies,
    };

    this.handleReply = this.handleReply.bind(this);
  }

  handleReply(e) {
    const userMessage = {
      value: e.target.innerHTML,
      fromMe: true,
    };

    const nextMessage = this.props.conversation.find(
      element => element.id === e.target.dataset.next
    );

    let responses = nextMessage.replies;

    this.setState(postMessages(userMessage, nextMessage))
    this.setState({ responses })
  }

  render() {
    return (
      <div className="App">
        <h1>React Chat</h1>
        <Messages messages={this.state.messages} />
        <Responses responses={this.state.responses} onMessageSubmit={this.handleReply} />
      </div>
    );
  }
}

/* 
TODO
  March 17
  [x] Make sure replies render
  [ ] Load full conversation
  [ ] Simplify Messagees/Responses abstraction
  [ ] Refactor handleReply
*/