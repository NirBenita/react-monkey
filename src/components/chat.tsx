import * as React from 'react';
import styled from 'styled-components';
import MTRC from 'markdown-to-react-components';
import {Message as MessageType, Reply as ReplyType} from '../typings'

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

const Header = styled.header`
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
const Messages = ({ messages:Message[] }) => {
  const Avatar = () => <img 
        className="avatar"
        src="https://cloud.githubusercontent.com/assets/2289769/20545056/9fa044ea-b115-11e6-9314-ba3e6516e573.png"
        alt="avatar" />
  
  const MessageFeed = messages.map((msg, i) => (
    <ConvoRow fromMe={msg.fromMe} key={i}>
      {!msg.fromMe ? <Avatar /> : null}
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

// 🗣 A list of possible responses
const Responses = ({messages, onMessageSubmit, firstTime}) => {
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

export {
  Messages,
  Responses,
  AppLayout,
  Header
};

const Button : React.StatelessComponent<React.HTMLProps<JSX.Element>> = (props: React.HTMLProps<JSX.Element> & {
    type?:string,
    onClick?:Function
}) => {
    return (
        <button onClick={props.onClick}
            type={props.type}>
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button'
}

export { Button }