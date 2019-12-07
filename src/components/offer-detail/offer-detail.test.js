import React from 'react';
import renderer from 'react-test-renderer';

import {OfferDetail} from './offer-detail.jsx';

it(`should match snapShot`, () => {
  const loadOffersList = jest.fn();
  const setDefaultSettings = jest.fn();
  const props = {
    loadOffersList,
    setDefaultSettings
  };

  const wrapper = renderer.create(<OfferDetail {...props} />).toJSON();

  expect(wrapper).toMatchSnapshot();
});

