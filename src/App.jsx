import React, { Component } from 'react';
import styled from 'styled-components';


export const postMessage = (state, msg) => {
  state.push(msg);
};

// 📢 A stream of messages
const Messages = ({ messages }) => {
  const MessageFeed = messages.map((msg, i) => (
    <ConvoRow fromMe={msg.fromMe}>
      <Message fromMe={msg.fromMe} key={i}>
        <span>{msg.value}</span>
      </Message>
    </ConvoRow>
    ));

  return (
    <div>
      {MessageFeed}
    </div>
  );
};

const ConvoRow = styled.div`
  display:flex;
  justify-content: ${({ fromMe }) => fromMe ? 'flex-end' : 'flex-start'};
`;

const ResponseBar = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
`;

// A single message
const Message = styled.div`
    max-width: 240px;
    margin: 12px 8px;
    padding: 8px;
    min-width:32px;
    background:${({ fromMe }) => fromMe ? 'grey' : 'blue'};
    color: ${({ fromMe }) => fromMe ? 'black' : 'white'};
    border-radius:${({ fromMe }) => fromMe ? '8px 8px 0 8px' : '8px 8px 8px 0'};
`;

// 🗣 A list of possible responses
const Responses = (props) => {
  const ResponseList = props.responses.map((response, i) => (
    <Message
      data-next={response.next}
      key={i}
      fromMe
      response={response}
      onClick={props.onMessageSubmit}>
      {response.value}
    </Message>
    ));
  return (
    <ResponseBar>
      {ResponseList}
    </ResponseBar>
  );
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
