import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CitiesList} from './cities-list.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Component CitiesList works correctly`, () => {
  const setCity = jest.fn();
  const setOffersList = jest.fn();
  const setDefaultCity = jest.fn();
  const props = {
    cities: [`AAA`],
    activeCity: `AAA`,
    offers: [{
      name: `AAA`,
      price: 120,
      type: `AAA`,
      src: `AAA`,
    }],
    setCity,
    setOffersList,
    setDefaultCity,
  };

  it(`should call setCity with given city name`, () => {
    const wrapper = shallow(<CitiesList {...props} />);

    wrapper.find(`li`).first().simulate(`click`, {target: {id: `Paris`}});
    expect(setCity).toHaveBeenCalledWith(`Paris`);
  });

  it(`should call setOffersList with given city name and offers`, () => {
    const wrapper = shallow(<CitiesList {...props} />);

    wrapper.find(`li`).first().simulate(`click`, {target: {id: `Paris`}});
    expect(setOffersList).toHaveBeenCalledWith(`Paris`, props.offers);
  });
});
