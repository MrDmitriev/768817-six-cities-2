import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page.jsx';
import OfferDetail from '../offer-detail/offer-detail.jsx';
import {MainEmpty} from '../main-emtpy/main-empty.jsx';
import login from '../login/login.jsx';

export class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        <Route path={`/`} component={MainPage} exact />
        <Route path={`/login`} component={login} exact />
        <Route path={`/offer/:id`} component={OfferDetail} exact />
        <Route path={`/offers-not-found`} component={MainEmpty} exact />
      </Switch>
    );
  }
}

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
};

export default connect(
    (state) => ({
      isAuthorizationRequired: state.user.isAuthorizationRequired,
    })
)(App);
