import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import conversation from './lib/mock-conversation';
import { injectGlobal } from 'styled-components';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
        line-height:24px;
      }

      body {
        background: GHOSTWHITE;
        height: 100%;
        width: 100%;
        font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      }
`;

ReactDOM.render(
  <App conversation={conversation} />,
  document.getElementById('root')
);
