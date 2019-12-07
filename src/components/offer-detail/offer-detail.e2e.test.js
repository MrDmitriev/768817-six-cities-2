import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {OfferDetail} from './offer-detail.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`should load offers and set default settings`, () => {
  const loadOffersList = jest.fn();
  const setDefaultSettings = jest.fn();
  const props = {
    loadOffersList,
    setDefaultSettings
  };

  const wrapper = shallow(<OfferDetail {...props} />);
  const instance = wrapper.instance();
  instance.componentDidMount();

  expect(loadOffersList).toHaveBeenCalled();
  expect(setDefaultSettings).toHaveBeenCalled();
});

