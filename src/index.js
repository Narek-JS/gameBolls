import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from './components';
import { ThemeContextProvaider } from './context';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvaider>
      <Container />
    </ThemeContextProvaider>
  </React.StrictMode>,
  document.getElementById('root')
);