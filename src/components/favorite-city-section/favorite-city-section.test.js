import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import {FavoriteCitySection} from './favorite-city-section.jsx';
import history from '../../history/history.js';

it(`should match snapShot`, () => {
  const props = {
    city: `AAA`,
    onBookmarkClick: jest.fn(),
    offers: [{
      name: `AAA`,
      price: 120,
      type: `AAA`,
      images: [`aaa`],
    }]
  };

  const wrapper = renderer.create(
      <Router history={history}>
        <FavoriteCitySection {...props} />
      </Router>
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
});
