import React from 'react';
import styled from 'styled-components';

const Navigation = styled.nav`
  background: ghostwhite;
  max-width:240px;
  float: left;
  height: 100vh;
  padding: 12px;
`
const AppLayout = styled.div`
  display:flex;

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
    margin: 12px 8px;
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

  .hint {
    align-self: center;
  }
`;

// 🗣 A list of possible responses
const Responses = (props) => {
  const ResponseList = props.responses.map((response, i) => (
    <Message
      data-next={response.next}
      key={i}
      fromMe
      onClick={props.onMessageSubmit}
    >
      {response.value}
    </Message>
    ));
  return (
    <ResponseBar>
      {props.firstTime ? <span className="hint">Click me 👉</span> : null}
      {ResponseList}
    </ResponseBar>
  );
};

export {
    Message,
    Messages,
    Responses,
    Navigation,
    AppLayout
};
