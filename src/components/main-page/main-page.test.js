import React from 'react';
import renderer from 'react-test-renderer';
import {MainPage} from './main-page.jsx';

it(`should match snapshot`, () => {
  const mainPage = renderer.create(<MainPage />).toJSON();

  expect(mainPage).toMatchSnapshot();
});
