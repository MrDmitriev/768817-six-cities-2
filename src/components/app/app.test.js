import React from 'react';
import renderer from 'react-test-renderer';
import {App} from './app.jsx';

it(`should match snapshot`, () => {
  const app = renderer.create(<App />).toJSON();

  expect(app).toMatchSnapshot();
});
