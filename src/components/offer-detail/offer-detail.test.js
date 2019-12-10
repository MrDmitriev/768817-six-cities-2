import React from 'react';
import renderer from 'react-test-renderer';

import {OfferDetail} from './offer-detail.jsx';

it(`should match snapShot`, () => {
  const loadOffersList = jest.fn();
  const setDefaultSettings = jest.fn();
  const loadOfferReviews = jest.fn();
  const setActiveOffer = jest.fn();
  const props = {
    loadOffersList,
    setDefaultSettings,
    loadOfferReviews,
    setActiveOffer,
    match: {
      params: {
        id: 1
      }
    }
  };

  const wrapper = renderer.create(<OfferDetail {...props} />).toJSON();

  expect(wrapper).toMatchSnapshot();
});

