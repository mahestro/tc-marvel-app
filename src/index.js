import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { loadProjectTypes } from './actions/siteActions';
import { loadTeams } from './actions/teamActions';

store.dispatch(loadProjectTypes());
store.dispatch(loadTeams());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'));

  registerServiceWorker();
