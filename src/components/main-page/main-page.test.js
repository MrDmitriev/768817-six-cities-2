import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from './main-page.jsx';

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

