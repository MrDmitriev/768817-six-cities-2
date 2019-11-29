import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list.jsx';

it(`should match snapshot`, () => {
  const setOffersList = jest.fn();
  const setDefaultItem = jest.fn();
  const props = {
    cities: [`AAA`],
    activeItem: `AAA`,
    offers: [{
      title: `AAA`,
      price: 120,
      type: `AAA`,
      images: [`AAA`],
    }],
    setOffersList,
    setDefaultItem,
  };

  const wrapper = renderer.create(<CitiesList {...props} />).toJSON();

  expect(wrapper).toMatchSnapshot();
});
