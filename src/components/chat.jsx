import React from 'react';
import styled from 'styled-components';
import MTRC from 'markdown-to-react-components';

MTRC.configure({
  a: React.createClass({
    render() {
      return <MessageLink 
        target="_blank"
        href={this.props.href}
        value={this.props.id}>{this.props.children}</MessageLink>
    }
  })
});

const MessageLink = styled.a`
  font-weight: bold;
  color:white;
  transition: 0.2s color ease-in;

  &:hover {
    color:#c2e0ff;
  }
`

const AppLayout = styled.div`
  display:flex;
  flex-direction:column;
  > * {
    flex: 1;
  }

  p {
    margin-bottom:12px;
  }
`

// A single message
const Message = styled.div`
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.08);
    max-width: 360px;
    min-width:32px;
    margin: 12px;
    padding: 12px;
    background:${({ fromMe }) => fromMe ? '#F7F7F7' : '#5180FF'};
    color: ${({ fromMe }) => fromMe ? 'black' : 'white'};
    border-radius:${({ fromMe }) => fromMe ? '8px 8px 0 8px' : '8px 8px 8px 0'};

    &.pinned{
      max-width:none;
    }
`;

// 📢 A stream of messages
const Messages = ({ messages }) => {
  
  const MessageFeed = messages.map((msg, i) => (
    <ConvoRow fromMe={msg.fromMe} key={i}>
      <Message fromMe={msg.fromMe}>
        <div>{MTRC(msg.value).tree}</div>
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

  .hint {
    align-self: center;
  }
`;

// 🗣 A list of possible responses
const Responses = ({messages, onMessageSubmit, firstTime}) => {
  const ResponseList = messages.map((message, i) => (
    <Message
      key={i}
      fromMe
      onClick={() => onMessageSubmit(message)}
    >
      {message.value}
    </Message>
  ));
  return (
    <ResponseBar>
      {firstTime ? <span className="hint">Click me 👉</span> : null}
      {ResponseList}
    </ResponseBar>
  );
};

export {
  Messages,
  Responses,
  AppLayout
};
