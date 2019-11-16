import React from 'react';
import renderer from 'react-test-renderer';
import {CitiesList} from './cities-list.jsx';

it(`should match snapshot`, () => {
  const setCity = jest.fn();
  const setOffersList = jest.fn();
  const setDefaultCity = jest.fn();
  const props = {
    cities: [`AAA`],
    activeCity: `AAA`,
    offers: [{
      name: `AAA`,
      price: 120,
      type: `AAA`,
      src: `AAA`,
    }],
    setCity,
    setOffersList,
    setDefaultCity,
  };

  const wrapper = renderer.create(<CitiesList {...props} />).toJSON();

  expect(wrapper).toMatchSnapshot();
});
