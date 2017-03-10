import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './index.css';

const mockWelcomeMessage = [
  {
    user: 'bot',
    value: 'I am the passive agressive chat bot. Im SOOOO happy to meet you',
    replies: [
      {
        type: 'string',
        value: '🦄'
      },
      {
        type: 'string',
        value: '🐮'
      }
    ]
  },
]

ReactDOM.render(
  <App welcome={mockWelcomeMessage} />,
  document.getElementById('root')
);
