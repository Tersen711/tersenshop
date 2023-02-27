import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './../src/containers/App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import registerServiceWorker from './registerServiceWorker'

const root = ReactDOM.createRoot(document.getElementById('root'));
// registerServiceWorker();
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
