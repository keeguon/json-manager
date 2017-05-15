import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import './index.css';

import App from './components/App.jsx';

ReactDOM.render((
  <Router hashType="hashbang">
    <App />
  </Router>
), document.getElementById('root'));

// hot reloading
if (module.hot) module.hot.accept();