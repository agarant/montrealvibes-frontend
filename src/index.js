import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { ThemeProvider } from 'styled-components';

const theme = {
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: '#57BC90',
    primary2Color: '#37A475',
    primary3Color: '#015249',
    accent1Color: '#e67e22',
    accent2Color: '#a5a5b1',
    successColor: '#2ecc71',
    errorColor: '#e74c3c',
    textColor: '#414141',
    alternateTextColor: '#ecf0f1',
    canvasColor: '#ecf0f1',
    borderColor: '#a5a5b1',
    white: 'white'
  },
};

import Routes from './routes';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Routes history={browserHistory}/>
  </ThemeProvider>
  , document.getElementById('root')
);
