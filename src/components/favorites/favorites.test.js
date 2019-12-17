import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';

import history from '../../history/history.js';
import {Favorites} from './favorites.jsx';

jest.mock(`../sign-in/sign-in.jsx`);

it(`should match snapShot`, () => {
  const props = {
    favoriteCities: [`AAA`],
    addToFavorite: jest.fn(),
    loadFavoriteOffers: jest.fn(),
    checkAuthorization: jest.fn(),
    favoriteOffers: {
      aaa: [{
        name: `AAA`,
        price: 120,
        type: `AAA`,
        images: [`aaa`],
      }]
    }
  };

  const wrapper = renderer.create(
      <Router history={history}>
        <Favorites {...props} />
      </Router>
  ).toJSON();
  expect(wrapper).toMatchSnapshot();
});
