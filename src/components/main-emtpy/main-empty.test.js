import React from 'react';
import renderer from 'react-test-renderer';
import {MainEmpty} from './main-empty.jsx';

import {Router} from 'react-router-dom';
import history from '../../history/history.js';

it(`should match snapShot`, () => {
  const wrapper = renderer.create(
      <Router history={history}>
        <MainEmpty />
      </Router>
  ).toJSON();

  expect(wrapper).toMatchSnapshot();
});
