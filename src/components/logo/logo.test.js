import React from 'react';
import renderer from 'react-test-renderer';
import {Logo} from './logo.jsx';

import {BrowserRouter} from 'react-router-dom';

it(`should match snapShot`, () => {
  const wrapper = renderer.create(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>
  ).toJSON();

  expect(wrapper).toMatchSnapshot();
});
