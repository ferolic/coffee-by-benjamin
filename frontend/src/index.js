import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import GlobalStyle from './utils/globals';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
  document.getElementById('root')
);
