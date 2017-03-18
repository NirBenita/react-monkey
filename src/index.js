import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import mockConversation from './mockConversation';
import { injectGlobal } from 'styled-components';

injectGlobal`
    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
      }

      body {
        background: GHOSTWHITE;
        height: 100%;
        width: 100%;
        font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      }
`

ReactDOM.render(
  <App conversation={mockConversation} />,
  document.getElementById('root')
);
