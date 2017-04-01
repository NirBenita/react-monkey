import React, { Component } from 'react';

import {
  Messages,
  Responses,
  AppLayout
} from './components/chat';

function postMessages(messages) {
  let messagesToAdd = [...arguments]
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
    const toPin = props.conversation.find(
      element => element.id === 'toPin'
    );

    this.state = {
      messages: [welcomeMessage],
      responses: welcomeMessage.replies,
      firstTime: true,
      toPin: toPin
    };

    this.handleReply = this.handleReply.bind(this);
  }

  handleReply(userMessage) {

    userMessage.fromMe = true;

    if (this.state.firstTime) {
      this.setState({ firstTime: false })
    };
    
    const nextMessage = this.props.conversation.find(
      element => element.id === userMessage.next
    );

    let responses = nextMessage.replies;
    
    this.setState(postMessages(userMessage, nextMessage))
    this.setState({ responses })
  }

  render() {
    return (
      <AppLayout className="App">
          <Messages messages={this.state.messages} />
          <Responses messages={this.state.responses} onMessageSubmit={this.handleReply} firstTime={this.state.firstTime} />
      </AppLayout>
    );
  }
}
/* 
TODO
  [x] Make sure replies render
  [x] Load full conversation
  [x] Add a click hint
  [x] Add left bar
  [x] Match Sketch styles
  [x] Refactor handleReply to pass the actual message
  [ ] Allow the bot to chain messages
  [ ] Typing animation
  [x] Add markdown support
  [ ] Add Typescript support
  [ ] Add Image and Link message components
  [ ] Start message feed from bottom
*/