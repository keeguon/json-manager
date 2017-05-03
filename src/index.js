import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const title = 'JSON Manager';

ReactDOM.render(<App />, document.getElementById('app'));

// hot reloading
module.hot.accept();