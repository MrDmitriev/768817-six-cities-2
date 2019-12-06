import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page.jsx';
import SignIn from '../sign-in/sign-in.jsx';

export class App extends React.PureComponent {
  render() {
    return (
      <Switch>
        {/* <Route path={`/`} component={MainPage} exact /> */}
        <Route path={`/login`} component={SignIn} exact />
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
