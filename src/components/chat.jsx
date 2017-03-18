import React from 'react';
import styled from 'styled-components';

// A single message
const Message = styled.div`
    max-width: 240px;
    margin: 12px 8px;
    padding: 8px;
    min-width:32px;
    background:${({ fromMe }) => fromMe ? 'GAINSBORO' : 'MEDIUMBLUE'};
    color: ${({ fromMe }) => fromMe ? 'black' : 'white'};
    border-radius:${({ fromMe }) => fromMe ? '8px 8px 0 8px' : '8px 8px 8px 0'};
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
      {ResponseList}
    </ResponseBar>
  );
};

export {
    Messages,
    Responses,
};
