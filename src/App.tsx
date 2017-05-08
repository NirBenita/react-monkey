'use strict';

import * as React from 'react';
import {findDOMNode} from 'react-dom';

import {Messages, Responses, AppLayout} from './components/chat';
import {Bar, Button} from './components/atoms';
import {Message} from './types';

function postMessages(messages: Message[]) {
  let messagesToAdd = [...messages];
  return function update(state: MyState) {
    let newMessagesfeed = state
      .messages
      .slice();
    newMessagesfeed.push(...messagesToAdd);
    return {messages: newMessagesfeed};
  };
}

interface MyProps {
  conversation: any[];
}
interface MyState {
  firstTime?: boolean;
  messages: Message[];
  responses?: Message[];
  lastScroll: number;
  scrollingDown: boolean;
}
export default class App extends React.Component<MyProps, MyState> {
  messagesEnd: HTMLDivElement;
  constructor(props: MyProps) {
    super(props);
    const welcomeMessage = props.conversation[0];

    this.state = {
      messages: [welcomeMessage],
      responses: welcomeMessage.replies,
      firstTime: true,
      lastScroll: 0,
      scrollingDown: false
    };

    this.handleReply = this
      .handleReply
      .bind(this);
    this.handleScroll = this
      .handleScroll
      .bind(this);
  }

  scrollToBottom = () => {
    const node = findDOMNode(this.messagesEnd);
    node.scrollIntoView({behavior: 'smooth'});
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(e: any) {
    if (this.state.lastScroll < e.srcElement.body.scrollTop){
      this.setState({scrollingDown: true});  
    } else {
      this.setState({scrollingDown: false});  
    }
    this.setState({lastScroll: e.srcElement.body.scrollTop});  

    console.log(e.srcElement.body.scrollTop, this.state.scrollingDown);
  }

  handleReply(reply: Message) {
    if (this.state.firstTime) {
      this.setState({firstTime: false});
    }
    reply.fromMe = true;

    const nextMessage = this
      .props.conversation
      .find(msg => msg.id === reply.next);
    if (nextMessage) {
      const nextResponses = nextMessage ? nextMessage.replies : undefined;

      this.setState(postMessages([reply, nextMessage]));
      this.setState({responses: nextResponses});

      if (nextMessage.chain) {
        
        const msgToChain = this
          .props.conversation
          .find(msg => msg.id === nextMessage.chain);
        
        // tslint:disable-next-line:no-unused-expression
        msgToChain && this.setState(postMessages([msgToChain]));
      }
    }
    setTimeout( this.scrollToBottom, 50 );
  }

  render() {
    return (
      <AppLayout className="App">
        <Bar className={this.state.scrollingDown ? 'hide' : ''} >
          Build your own! 
          <a target="_blank" href="https://github.com/NirBenita/react-monkey">
            <Button style={{'margin-left': '12px'}}>Fork</Button>
          </a>
        </Bar>
        
        <Messages messages={this.state.messages}/>
        <Responses
          messages={this.state.responses}
          onMessageSubmit={this.handleReply}
          firstTime={this.state.firstTime}/>
        <div 
          style={{float: 'left', clear: 'both'}}
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
  [x] Add Typescript support
  [ ] Add Image and Link message components
  [x] Scroll to bottom on msg add
  [x] bot avatar
  [ ] contact me shortcut
  [ ] Add current time
  [ ] Remove top bar when scrolling
  [ ] change color of links

  [ ] Rewrite and test
*/