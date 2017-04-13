import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

import {
  Messages,
  Responses,
  AppLayout,
  Header
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
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  componentDidUpdate() {
    // var node = findDOMNode(this);
    // node.scrollTop = node.scrollHeight;
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
    
    if(nextMessage.chain){
      const msgToChain = this.props.conversation.find(
        element => element.id === nextMessage.chain
      );
      this.setState(postMessages(msgToChain))
    }
  }

  render() {
    return (
      <AppLayout className="App">
          <Header>
            <span> - TODAY - </span>
          </Header>
          <Messages messages={this.state.messages} />
          <Responses
            messages={this.state.responses}
            onMessageSubmit={this.handleReply}
            firstTime={this.state.firstTime} 
          />
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
  [ ] Match Sketch styles
  [x] Refactor handleReply to pass the actual message
  [x] Allow the bot to chain messages
  [ ] Typing animation
  [x] Add markdown support
  [ ] Add Typescript support
  [ ] Add Image and Link message components
  [ ] Scroll to bottom on msg add
  [x] bot avatar
  [ ] contact me shortcut
  [ ] Add current time
*/