import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import conversation from './lib/personal-website';

ReactDOM.render(
  <App conversation={conversation} />,
  document.getElementById('root')
);
