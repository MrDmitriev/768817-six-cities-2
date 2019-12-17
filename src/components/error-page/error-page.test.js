import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history/history.js';
import {ErrorPage} from './error-page.jsx';

jest.mock(`../sign-in/sign-in.jsx`);

it(`should match snapShot`, () => {
  const wrapper = renderer.create(
      <Router history={history}>
        <ErrorPage />
      </Router>
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
});
