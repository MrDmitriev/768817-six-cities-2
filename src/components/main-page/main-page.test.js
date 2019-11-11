import React from 'react';
import renderer from 'react-test-renderer';
import MainPage from './main-page.jsx';

jest.mock(`../map/map.jsx`, () => jest.fn().mockReturnValue(null));

it(`should match snapshot`, () => {
  const offers = [{
    name: `AAA`,
    price: 120,
    type: `AAA`,
    src: `AAA`,
  }];
  const mainPage = renderer.create(<MainPage offers={offers} />).toJSON();

  expect(mainPage).toMatchSnapshot();
});

