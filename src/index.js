import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import mockConversation from './mockConversation';

ReactDOM.render(
  <App conversation={mockConversation} />,
  document.getElementById('root')
);
