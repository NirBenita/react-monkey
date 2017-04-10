import React, { Component } from 'react';
import styled from 'styled-components';

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

const TopBar = styled.div`
  height:48px;
  background-color:white;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
  display:flex;
  padding: 0px 12px;

  * {
    flex:1;
    line-height:48px;
  }
  .main {
    text-align:left;
  }
  .secondary {
    text-align:right;
  }

`

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
          <TopBar className="top-bar">
            <div className="main" >
              <a target="_blank" href="https://twitter.com/@NirBenita">[x] @NirBenita</a>
            </div>
            <div className="secondary" >
              <a target="_blank" href="https://github.com/NirBenita/react-monkey">[x] Fork</a>
            </div>
            </TopBar>
          <Messages style messages={this.state.messages} />
          <Responses className="responses"
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
  [x] Match Sketch styles
  [x] Refactor handleReply to pass the actual message
  [x] Allow the bot to chain messages
  [ ] Typing animation
  [x] Add markdown support
  [ ] Add Typescript support
  [ ] Add Image and Link message components
  [ ] Scroll to bottom
*/