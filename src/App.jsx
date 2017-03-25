import React, { Component } from 'react';
import {
  Messages,
  Responses,
  Navigation,
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
        <Navigation>
          <p>
            Hi! This is Nir, welcome to my website! I’m sorry I couldn’t be here to greet you myself, but I left my bot to answer your questions. I’m still working out some kinks with his attitude, but I’m sure you’ll get a long 💜
          </p>
          <p>
            Here are some links you might be looking for, to save you some time:
          </p>
          <ul>
            <li><a href="">Twitter</a></li>
            <li><a href="">Github</a></li>
            <li><a href="">Medium</a></li>
          </ul>
        </Navigation>
        <div style={{ overflow: 'auto', height: '100vh' }}>
          <Messages messages={this.state.messages} />
          <Responses messages={this.state.responses} onMessageSubmit={this.handleReply} firstTime={this.state.firstTime} />
        </div>
      </AppLayout>
    );
  }
}

/* 
TODO
  March 17
  [x] Make sure replies render
  [x] Load full conversation
  [x] Add a click hint
  [x] Add left bar
  [x] Match Sketch styles
  [x] Refactor handleReply to pass the actual message
  [ ] Allow the bot to chain messages
  [ ] Typing animation
  [ ] Add markdown support
  [ ] Add Typescript support
  [ ] Add Image and Link message components
*/