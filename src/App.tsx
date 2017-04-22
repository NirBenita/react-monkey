'use strict';

import * as React from 'react';
import {findDOMNode} from 'react-dom';

import {Messages, Responses, AppLayout, Header} from './components/chat';
import {Message} from './typings'

function postMessages(messages: Message[]) {
  let messagesToAdd = [...messages]
  return function update(state: any) {
    let newMessagesfeed = state
      .messages
      .slice();
    newMessagesfeed.push(...messagesToAdd);
    return {messages: newMessagesfeed}
  }
}


interface MyProps{
  conversation: any[]
}
interface MyState{
  firstTime: boolean,
  messages: Message[],
  responses: Message[],

}
export default class App extends React.Component<MyProps, MyState> {
  messagesEnd: HTMLDivElement;
  constructor(props: MyProps) {
    super(props);
    const welcomeMessage = props.conversation[0];

    this.state = {
      messages: [welcomeMessage],
      responses: welcomeMessage.replies,
      firstTime: true
    };

    this.handleReply = this
      .handleReply
      .bind(this);
    this.componentDidUpdate = this
      .componentDidUpdate
      .bind(this);
  }

  scrollToBottom = () => {
    const node = findDOMNode(this.messagesEnd);
    node.scrollIntoView({behavior: "smooth"});
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  handleReply(reply: Message) {
    if (this.state.firstTime) {
      this.setState({firstTime: false})
    };

    const nextMessage = this
      .props.conversation
      .find(msg => msg.id === reply.next);

    let nextResponses = nextMessage.replies;

    this.setState(postMessages([reply, nextMessage]))
    this.setState({responses: nextResponses})

    if (nextMessage.chain) {
      const msgToChain = this
        .props.conversation
        .find(element => element.id === nextMessage.chain);
      this.setState(postMessages(msgToChain))
    }
  }

  render() {
    return (
      <AppLayout className="App">
        <Header>
          <span>
            - TODAY -
          </span>
        </Header>
        <Messages messages={this.state.messages}/>
        <Responses
          messages={this.state.responses}
          onMessageSubmit={this.handleReply}
          firstTime={this.state.firstTime}/>
        <div 
          style={ {float: "left", clear: "both"} }
          ref={(el) => { this.messagesEnd = el; }} />
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
  [x] Scroll to bottom on msg add
  [x] bot avatar
  [ ] contact me shortcut
  [ ] Add current time
  [ ] Rewrite and test
*/