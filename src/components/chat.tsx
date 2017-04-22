import * as React from 'react';
import { SFC } from 'react';
import styled from 'styled-components';
import {Message as MessageType} from '../typings'
var md = require('markdown-it')();

export const Header = styled.header`
  border: 0;
  border-top: 4px solid;
  border-image: linear-gradient(156deg, #84FAB0 0%, #8FD3F4 100%) 1 0%;
  line-height: 70px;
  height: 70px;
  text-align:center;
  background-image: linear-gradient(-180deg, #FFFFFF 48%, rgba(255,255,255,0.00) 100%);

  >span {
    color:#5F6061
  }
`

// const MessageLink = styled.a`
//   font-weight: bold;
//   color:white;
//   transition: 0.2s color ease-in;

//   &:hover {
//     color:#c2e0ff;
//   }
// `

export const AppLayout = styled.div`
  display:flex;
  flex-direction:column;
  > * {
    flex: 1;
  }
`
const FromBox: SFC<{fromMe?: boolean, className?: 'string'}> = (props: any) =>
  <div>{props.children}</div>

interface MessageProps {
  fromMe?: boolean; 
  className?: string;
  onClick?: () => void;
}

const MessageBox: SFC<MessageProps> = (props: any) =>
  <div>{props.children}</div>

// A single message
export const Message = styled(MessageBox)`
    box-shadow: 0 8px 8px 0 rgba(0,0,0,0.08);
    max-width: 360px;
    min-width:32px;
    margin: 12px;
    padding: 12px;
    background:${({ fromMe }) => fromMe ? '#F7F7F7' : '#5180FF'};
    color: ${({ fromMe }) => fromMe ? 'black' : 'white'};
    border-radius:${({ fromMe }) => fromMe ? '8px 0px 8px 8px' : '0px 8px 8px 8px'};

    &.pinned{
      max-width:none;
    }

    &.reply {
      cursor:pointer;
      transition: 0.2s background ease-in;
    }

    &.reply:hover{
      background:#f1f1f1;
    }
`;

// 📢 A stream of messages
export const Messages: SFC<{messages: MessageType[]}> = ({ messages }) => {
  const Avatar = () => <img 
        className="avatar"
        src="https://cloud.githubusercontent.com/assets/2289769/20545056/9fa044ea-b115-11e6-9314-ba3e6516e573.png"
        alt="avatar" />
  
  const MessageFeed = messages.map((msg, i) => (
    <ConvoRow fromMe={msg.fromMe} key={i}>
      {!msg.fromMe ? <Avatar /> : null}
      <Message fromMe={msg.fromMe}>
        <div>{md.renderer(msg.value)}</div>
      </Message>
    </ConvoRow>
  ));

  return (
    <div>
      {MessageFeed}
    </div>
  );
};

export const ConvoRow = styled(FromBox)`
  display:flex;
  justify-content: ${({ fromMe }) => fromMe ? 'flex-end' : 'flex-start'};

  .avatar {
    height:36px;
    margin: 12px 0px 12px 12px;
  }
`;

const ResponseBar = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;

  .hint {
    align-self: center;
  }
`;

interface ResponsesProps {
  messages: MessageType[],
  onMessageSubmit: (reply: MessageType) => void,
  firstTime: boolean,
  fromMe?: boolean,
  className?: string
}

// 🗣 A list of possible responses
export const Responses: SFC<ResponsesProps> = ({messages, onMessageSubmit, firstTime, className}) => {
  const ResponseList = messages.map((message, i) => (
    <Message
      key={i}
      fromMe
      onClick={() => onMessageSubmit(message)}
      className="reply"
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