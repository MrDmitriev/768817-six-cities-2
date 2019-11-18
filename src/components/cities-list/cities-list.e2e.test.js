import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CitiesList} from './cities-list.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Component CitiesList works correctly`, () => {
  const setOffersList = jest.fn();
  const setDefaultItem = jest.fn();
  const props = {
    cities: [`AAA`],
    activeItem: `AAA`,
    offers: [{
      name: `AAA`,
      price: 120,
      type: `AAA`,
      src: `AAA`,
    }],
    setOffersList,
    setDefaultItem,
  };

  it(`should call setCity with given city name`, () => {
    const wrapper = shallow(<CitiesList {...props} />);

    wrapper.find(`a`).first().simulate(`click`, {e: {currentTarget: {id: `Paris`}}});
    expect(setOffersList).toHaveBeenCalledWith(`AAA`, props.offers);
  });
});
