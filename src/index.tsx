import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../assets/index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
