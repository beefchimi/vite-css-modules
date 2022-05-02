import React from 'react';
import ReactDOM from 'react-dom';

// NOTE: These imports are order dependent!
import './styles/reset.scss';
import './styles/design-system.css';
import './styles/keyframes.css';
import './styles/global.css';

import {App} from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('ReactRoot'),
);
