import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import conversation from './lib/personal-website';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App conversation={conversation} />, div);
});
