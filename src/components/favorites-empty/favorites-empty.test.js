import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history/history.js';
import {FavoritesEmpty} from './favorites-empty.jsx';

jest.mock(`../sign-in/sign-in.jsx`);

it(`should match snapShot`, () => {
  const wrapper = renderer.create(
      <Router history={history}>
        <FavoritesEmpty />
      </Router>
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
});
