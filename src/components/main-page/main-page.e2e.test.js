import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MainPage} from './main-page.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`should exist`, () => {
  const offers = [{
    name: `AAA`,
    price: 120,
    type: `AAA`,
    src: `AAA`,
  }];
  const wrapper = shallow(<MainPage offers={offers} />);

  expect(wrapper).toBeDefined();
});
