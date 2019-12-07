import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import {CardOffersList} from './card-offers-list.jsx';

it(`should match snapshot`, () => {
  const offers = [{
    name: `AAA`,
    price: 120,
    type: `AAA`,
    images: [`aaa`],
  }];

  const wrapper = renderer.create(
      <BrowserRouter>
        <CardOffersList offers={offers} />
      </BrowserRouter>
  ).toJSON();

  expect(wrapper).toMatchSnapshot();
});
