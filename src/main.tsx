import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App';

import './styles/reset.css';
import './styles/design-system.css';
import './styles/animation.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
