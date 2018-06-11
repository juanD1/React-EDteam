import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './components/App';
// import StaticSite from './routes/Router'
import AuthSite from './routes/Auth'
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(<StaticSite />, document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(<AuthSite />, document.getElementById('root'));
registerServiceWorker();
