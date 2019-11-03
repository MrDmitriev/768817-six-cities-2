import React from 'react';
import {MapSection} from './map.jsx';
import renderer from 'react-test-renderer';

it(`should match snapshot`, () => {
  const offers = [{
    name: `AAA`,
    price: 120,
    type: `AAA`,
    src: `AAA`,
    position: [123, 123],
  }];

  const div = renderer.create(`div`);

  const wrapper = renderer.create(<MapSection offers={offers} />, {div});

  expect(wrapper).toMatchSnapshot();
});
