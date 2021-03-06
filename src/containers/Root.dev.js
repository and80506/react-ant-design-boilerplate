import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import DevTools from '../utils/DevTools';
import { Router } from 'react-router';

export default class Root extends Component {
  render() {
    const { store, history, routes } = this.props;
    return (
      <Provider store={store}>
        <div className="dev-react-root">
          <Router history={history} routes={routes} />
          <DevTools />
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  routes: PropTypes.object.isRequired
};
