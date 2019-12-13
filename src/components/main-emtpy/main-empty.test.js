import React from 'react';
import renderer from 'react-test-renderer';
import {MainEmpty} from './main-empty.jsx';

import {BrowserRouter} from 'react-router-dom';

it(`should match snapShot`, () => {
  const wrapper = renderer.create(
      <BrowserRouter>
        <MainEmpty />
      </BrowserRouter>
  ).toJSON();

  expect(wrapper).toMatchSnapshot();
});