import React from 'react';
import ReactDOM from 'react-dom';

// NOTE: These imports are order dependent!
import './styles/reset.css';
import './styles/design-system.css';
import './styles/animation.css';
import './styles/global.css';

import {App} from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('ReactRoot'),
);
